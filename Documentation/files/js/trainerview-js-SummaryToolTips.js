NDSummary.OnToolTipsLoaded("File:js/trainerview.js",{2:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype2\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> simConfig</div><div class=\"TTSummary\">This variable stores the most valueable data for the simulation, as it contains the currently active parameters for the:</div></div>",3:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype3\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> oldConfig</div><div class=\"TTSummary\">This variable stores the previous simConfig in order to enable dynamic changes of parameters from old to new values.</div></div>",4:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype4\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> tempConfig</div><div class=\"TTSummary\">This variable is used to store a deepcopy of the current simConfig so that temporary changes are not direcly effecting the simConfig. This is used before the shock is applied for the defibrilation. (Remember: Call by Reference is standard for Objects in JS)</div></div>",5:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype5\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> ecgGraph</div><div class=\"TTSummary\">Stores a reference to the ECGGraph.</div></div>",6:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype6\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> spo2Graph</div><div class=\"TTSummary\">Stores a reference to the SPO2Graph.</div></div>",7:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype7\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> etco2Graph</div><div class=\"TTSummary\">Stores a reference to the ETCO2Graph.</div></div>",8:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype8\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> etco2Calculation</div><div class=\"TTSummary\">Used to perform all calculations to simulate the etco2-curve.</div></div>",9:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype9\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> ecgCalculation</div><div class=\"TTSummary\">Used to perform all calculations to simulate the ecg-curve.</div></div>",10:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype10\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> spo2Calculation</div><div class=\"TTSummary\">Used to perform all calculations to simulate the spo2-curve.</div></div>",227:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype227\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">var</span> initControls = <span class=\"SHKeyword\">function</span> (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Called every second and when the values in the UI-Elements change. Responsible for initializing the UI and for setting the current config.</div></div>"});