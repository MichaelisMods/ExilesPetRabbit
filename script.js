var exileHtmlInject = '<style type="text/css"> .exilePop { text-align: center; font-weight: bold; } .exileButton { font-weight: bold; color: cyan; font-family: sans-serif; background-color: black; border-radius: 5px; margin-top: 3px; margin-bottom: 3px; margin-left: 3px; margin-right: 3px; } </style> <div class="toolbarButton liveButton hidden" data-tooltip="Let anyone on Rabbit join you!"></div> <div class="toolbarButton rabbitcastLaunchpadButton" data-tooltip="Launchpad"><span></span></div> <div class="toolbarButton rabbitcastText hidden">Find Something to Watch</div> <div class="toolbarDivider"></div> <div class="toolbarButton screencastControlButton someoneIsInControll" data-tooltip="Remote Control"></div> <div class="takeScreencastControlRegion"></div> <div class="toolbarButton volumeControl" data-tooltip="Volume"> <div class="volumeIcon volume-3"></div> <span><div class="volumeSlider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style="width: 100%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 100%;"></span></div></span> </div> <div class="toolbarButton screencastQualityButton LD"> <div class="tooltipHolder" data-tooltip="Rabbitcast Quality"></div> <div class="screencastQualityMenu"></div> </div> <!--Start Exile DIVS--> <div class="toolbarButton nigger"> <button id="exileOP" class="exileButton">Chat PopOut</button> </div> <!--End Exil DIVS--> <div class="toolbarButton screencastStopButton notVisible" data-tooltip="Stop Sharing"></div> <div class="toolbarButton gameStopButton notVisible" data-tooltip="Stop Game"></div>';

var midBar = document.getElementsByClassName("barMiddle");
midBar[0].innerHTML = exileHtmlInject;

function doChatPOP()
{
	alert("NIGOR");
}

document.getElementById('exileOP').onclick = doChatPOP;