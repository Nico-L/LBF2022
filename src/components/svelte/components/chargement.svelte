<div class="mx-auto max-w-5/6 text-bleuLBF">
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current stroke-current h-20 w-20 mx-auto mt-2" viewBox="0 0 50 50">
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
    </div>
    <h3 class="text-center">
        <slot>La page se charge, merci de patienter...</slot>
    </h3>
</div>