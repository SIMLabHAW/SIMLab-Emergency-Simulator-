NDSummary.OnToolTipsLoaded("File:js/defi-management.js",{202:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype202\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> DefiManagement = <span class=\"SHKeyword\">function</span>()</div><div class=\"TTSummary\">Used to perform all defibrillator related task.</div></div>",134:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype134\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> chargeValue</div><div class=\"TTSummary\">This variable stores the currently chosen charge Value.</div></div>",204:"<div class=\"NDToolTip TConstant LJavaScript\"><div class=\"TTSummary\">Stores max, intermediate and min values for the defi charge.</div></div>",135:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype135\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> defiDischargeTimer</div><div class=\"TTSummary\">This variable contains the automatic defibrilator discharge timer.</div></div>",136:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype136\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> showECGPeaks</div><div class=\"TTSummary\">Indicates, if the ECG peaks are marked by triangles for the syncronization of the defibrillation.</div></div>",137:"<div class=\"NDToolTip TVariable LJavaScript\"><div id=\"NDPrototype137\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">var</span> isShockPending</div><div class=\"TTSummary\">Indicates, if a defibrillation shock is pending This is the case, when the shock-Button is pressed and the next R-wave is still to be detected.</div></div>",207:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype207\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">this</span>.defiEnergyDown = <span class=\"SHKeyword\">function</span>()</div><div class=\"TTSummary\">Used to reduce the Defibrilation Charge Energy and to update the corresponding Label.</div></div>",208:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype208\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">this</span>.defiEnergyUp = <span class=\"SHKeyword\">function</span>()</div><div class=\"TTSummary\">Used to increase the Defibrilation Charge Energy and to update the corresponding Label.</div></div>",141:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype141\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">this</span>.defiCharge = <span class=\"SHKeyword\">function</span>()</div><div class=\"TTSummary\">This function temporary saves the current simConfig, calls the function, which plays the loading sound playDefiLoadSound and opens the loading bar modal.</div></div>",209:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype209\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">this</span>.defiFullyCharged = <span class=\"SHKeyword\">function</span>()</div><div class=\"TTSummary\">In this function, the automatic defiDischargeTimer is started,&nbsp; which &quot;discharges&quot; the defibrilator after 30000ms automatically if no shock is performed. This function is called, when the &quot;charge&quot;-Soundfile has finished playing.</div></div>",210:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype210\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">this</span>.defiShock = <span class=\"SHKeyword\">function</span>()</div><div class=\"TTSummary\">This function is used to syncronally or asyncronally provide a shock to the patient.&nbsp; This is depended on, if the syncronization is active (indicated by showECGPeaks).&nbsp; If a sync Shock is expected, the shock is put on hold, until the next peak is found in the ECG.</div></div>",144:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype144\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">function</span> performShock()</div><div class=\"TTSummary\">This function is responsible to change the current pathology to the before chosen defiPathology from the Trainer. To apply the shock, it is first tested if the chosen defiPathology is not ignored. Then, the active pathology is changed to the defiPathology and the config is pushed to the database and initControls is reloaded. Also, the function to play the sound for the shock is called and some UI-resets adaptions are made.</div></div>",145:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype145\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">this</span>.performSyncShock = <span class=\"SHKeyword\">function</span>()</div><div class=\"TTSummary\">This function is used to perform a shock after waiting for the R-peak.</div></div>",146:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype146\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">this</span>.deactivateDefiSync = <span class=\"SHKeyword\">function</span>()</div><div class=\"TTSummary\">This function is used to deactivate the defi Syncronization, if no R-Peak can be detected.</div></div>",147:"<div class=\"NDToolTip TFunction LJavaScript\"><div id=\"NDPrototype147\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">this</span>.toggleDefiSync = <span class=\"SHKeyword\">function</span>()</div><div class=\"TTSummary\">This function is used to toggle the UI and the flag for the visible ecg-peaks.</div></div>"});