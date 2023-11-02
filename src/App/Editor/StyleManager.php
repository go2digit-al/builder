<?php

namespace Webkleur\Builder\App\Editor;

class StyleManager
{
    function __construct()
    {
        if(config('laravel-grapesjs.style_manager.limited_selectors', false)){
            $this->sectors = [];
        }
        
    }
}