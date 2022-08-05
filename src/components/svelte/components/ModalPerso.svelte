<script>
    import { createEventDispatcher, onDestroy, onMount, tick } from "svelte";
    import { get_current_component } from "svelte/internal"

    export let has_bouton_bleu = false;
    export let bouton_bleu_busy = false;

    var actionEncours = false
    //const dispatch = createEventDispatcher();

    const component = get_current_component()
    const svelteDispatch = createEventDispatcher()
    const dispatch = (name, detail) => {
        svelteDispatch(name, detail)
        component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
    }

    const close = () => dispatch("close");
    const boutonBleu = () => dispatch("boutonBleu")
    const retour = () => dispatch("retour")

	let modal;
	const handle_keydown = e => {
	  if (e.key === "Escape") {
	    close();
	    return;
	  }
	  if (e.key === "Tab") {
	    // trap focus
	    const nodes = modal.querySelectorAll("*");
	    const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);
	    let index = tabbable.indexOf(document.activeElement);
	    if (index === -1 && e.shiftKey) index = 0;
	    index += tabbable.length + (e.shiftKey ? -1 : 1);
	    index %= tabbable.length;
	    tabbable[index].focus();
	    e.preventDefault();
	  }
	};
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="z-100 fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="absolute w-full h-full bg-black opacity-75 top-0 left-0 cursor-pointer" on:click={close}></div>
    <div class="max-w-5/6 relative overflow-auto bg-white p-2 rounded" role="dialog" aria-modal="true" bind:this={modal}>
            <h2 class="text-xl w-full pb-1 mb-1 border-b-2 border-bleuLBF font-bold">
                <slot name="titre">Un titre</slot>
            </h2>
            <div class="mx-2"><slot>Le corps de la fenêtre</slot> </div>
            <div class="flex justify-end mt-3 mx-2">
                <button on:click={retour} class="mx-1 px-1 border-2 border-orangeLBF rounded text-base font-medium text-orangeLBF">
                    <slot name="boutonDefaut">Fermer</slot>
                </button>
                {#if has_bouton_bleu}
                    <button on:click={() => {if (!bouton_bleu_busy) {boutonBleu()}}} class="w-24 h-10 mx-1 px-1 border-2 border-bleuLBF rounded text-base font-medium text-bleuLBF">
                        {#if bouton_bleu_busy}
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current stroke-current text-bleuLBF-500 bg-bleuLBF-500 h-8 w-8 mx-auto mt-1" viewBox="0 0 50 50">
                                <g fill="none" fill-rule="evenodd" stroke-width="2">
                                    <circle cx="22" cy="22" r="1">
                                        <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
                                        <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
                                    </circle>
                                    <circle cx="22" cy="22" r="1">
                                        <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
                                        <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
                                    </circle>
                                </g>
                            </svg>
                        {:else}
                            <slot name="boutonBleu" class="mx-auto">BoutonBleu</slot>
                        {/if}
                    </button>
                {/if}
            </div>
    </div>
</div>

<style>
@import "./css/styles.css";
</style>