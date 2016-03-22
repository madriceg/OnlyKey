var steps = {
    Step1: {
        next: 'Step2'
    },
    Step2: {
        prev: 'Step1',
        next: 'Step3'
    },
    Step3: {
        prev: 'Step2',
        next: 'Step4'
    },
    Step4: {
        prev: 'Step3',
        next: 'Step5'
    },
    Step5: {
        prev: 'Step4',
        fn  : 'loadReview'
    }
};

function Wizard() {
    this.currentStep = Object.keys(steps)[0];
}

Wizard.prototype.init = function () {
<<<<<<< HEAD
    var _this = this;
    _this.btnNext = document.getElementById('ButtonNext');
    _this.btnPrev = document.getElementById('ButtonPrevious');
    _this.btnFinal = document.getElementById('SubmitFinal');

    _this.btnNext.onclick = function () {
        moveStep.call(_this, 'next');
    }

    _this.btnPrev.onclick = function () {
        moveStep.call(_this, 'prev');
    }

    setActiveStepUI.call(_this);
};

=======
    var currentEpochTime = new Date().getTime();
    console.info("current epoch time =", currentEpochTime);

    this.uiInit();
    this.usbInit();
};

Wizard.prototype.uiInit = function () {
    this.btnNext = document.getElementById('ButtonNext');
    this.btnPrev = document.getElementById('ButtonPrevious');
    this.btnFinal = document.getElementById('SubmitFinal');
    this.cpToggle = document.querySelector('.cp-toggle');

    this.btnNext.onclick = moveStep.bind(this, 'next');
    this.btnPrev.onclick = moveStep.bind(this, 'prev');
    this.cpToggle.onclick = toggleControlPanelUI;

    setActiveStepUI.call(this);
};

Wizard.prototype.usbInit = function () {

};

function toggleControlPanelUI() {
    // "this" = element clicked
    var wiz = { text: "Show Configuration Wizard", id: "wizard-panel" };
    var cp = { text: "Show Testing Tool", id: "control-panel" };

    switch (this.innerText) {
        case wiz.text:
            document.getElementById(cp.id).style.display = 'none';
            document.getElementById(wiz.id).style.display = 'block';
            this.innerText = cp.text;
            break;
        case cp.text:
            document.getElementById(wiz.id).style.display = 'none';
            document.getElementById(cp.id).style.display = 'block';
            this.innerText = wiz.text;
            break;
    }

    return false;
}

>>>>>>> origin/master
function moveStep(direction) {
    // if a next/prev step exists, make it the current step
    if (steps[this.currentStep][direction]) {
        this.currentStep = steps[this.currentStep][direction];
    }

    setActiveStepUI.call(this);

    // call step-related function
    if (steps[this.currentStep].fn && typeof window[steps[this.currentStep].fn] === 'function') {
        window[steps[this.currentStep].fn].call(this);
    }
<<<<<<< HEAD
=======
    return false;
>>>>>>> origin/master
}

function setActiveStepUI() {
    // set display style for all steps
    for(var stepId in steps) {
        var el = document.getElementById(stepId);
        if (el) {
            // el.style.display = (stepId === this.currentStep ? '' : 'none');
            if (stepId === this.currentStep) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        }
    }

    var header = document.getElementById('HeaderTable');
    var tabs = header.getElementsByTagName("td");

    for (var i = 0; i < tabs.length; i++) {
        if(tabs[i].getAttribute("data-step") === this.currentStep) {
<<<<<<< HEAD
            // tabs[i].style.backgroundColor = 'Yellow';
            tabs[i].classList.add('active');
        } else {
            // tabs[i].style.backgroundColor = 'Silver';
            tabs[i].classList.remove('active');
=======
            tabs[i].classList.add('active');
        } else {
                tabs[i].classList.remove('active');
>>>>>>> origin/master
        }
    }

    if (steps[this.currentStep].next) {
        this.btnNext.removeAttribute('disabled');
        this.btnFinal.setAttribute('disabled', 'disabled');
    } else {
        this.btnNext.setAttribute('disabled', 'disabled');
        this.btnFinal.removeAttribute('disabled');
    }

    if (steps[this.currentStep].prev) {
        this.btnPrev.removeAttribute('disabled');
    } else {
        this.btnPrev.setAttribute('disabled', 'disabled');
    }
<<<<<<< HEAD
=======
    return false;
>>>>>>> origin/master
}

// This function handles loading the review table innerHTML for the user to review before final submission
function loadReview() {
    // Assign values to appropriate cells in review table
    // document.getElementById('ReviewFirstName').innerHTML = document.getElementById('TextFirstName').value;
    // document.getElementById('ReviewMiddleName').innerHTML = document.getElementById('TextMiddleName').value;
    // document.getElementById('ReviewLastName').innerHTML = document.getElementById('TextLastName').value;
    document.getElementById('ReviewEmail').innerHTML = document.getElementById('TextEmail').value;

    // Indicate Yes or No based on checkboxes
    document.getElementById('ReviewHtmlGoodies').innerHTML = document.getElementById('CheckboxHtmlGoodies').checked ? 'Yes' : 'No';
    document.getElementById('ReviewJavaScript').innerHTML = document.getElementById('CheckboxJavaScript').checked ? 'Yes' : 'No';
    document.getElementById('ReviewWdvl').innerHTML = document.getElementById('CheckboxWdvl').checked ? 'Yes' : 'No';

    // Special case to display password as asterisks
    var iCounter = 1;
    var iCharacterCount = document.getElementById('TextPassword').value.length;
    var passwordMasked = '';

    for (iCounter = 1; iCounter <= iCharacterCount; iCounter++) {
        passwordMasked = passwordMasked + '*';
    }

    document.getElementById('ReviewPassword').innerHTML = passwordMasked;
<<<<<<< HEAD
=======
    return false;
>>>>>>> origin/master
}

document.addEventListener('DOMContentLoaded', function init() {
    console.info("Creating wizard instance...");
    var wizard = new Wizard();
    wizard.init();
}, false);
