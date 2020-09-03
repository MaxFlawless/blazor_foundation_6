function OffCanvasRegister(element, options) {
    if (typeof window.OffCanvasList == 'undefined') {
        window.OffCanvasList = [];
    }
    console.log(`Register ${element}`);
    console.log(JSON.parse(options));
    let optionsCanvas = options == null ? { 'data-transition-time': 500 } : JSON.parse(options);
    console.log(JSON.parse(options));

    window.OffCanvasList.push(new Foundation.OffCanvas($(`#${element}`), optionsCanvas));
}

function ElementToggle(element) {
    $(`#${element}`).foundation('toggle', null, null);
}

function ElementOpen(element) {
    console.log("Open " + element);
    $(`#${element}`).foundation('open', null, null);
}

function ElementClose(element) {
    console.log("Close " + element);
    $(`#${element}`).foundation('close', null, null);
}


function AccordionRegister(element, options) {
    if (typeof window.AccordionList == 'undefined') {
        window.AccordionList = [];
    }
    console.log(`Register ${element}`);
    let optionsCanvas = options == null ? {} : JSON.parse(options);


    window.AccordionList.push(new Foundation.ResponsiveAccordionTabs($(`#${element}`), optionsCanvas));
}

function TabRegister(element, options) {
    if (typeof window.TabList == 'undefined') {
        window.TabList = [];
    }
    console.log(`Register ${element}`);
    let optionsCanvas = options == null ? {} : JSON.parse(options);


    window.TabList.push(new Foundation.ResponsiveAccordionTabs($(`#${element}`), optionsCanvas));
}

function DropdownRegister(element, options) {
    if (typeof window.DropdownList == 'undefined') {
        window.DropdownList = [];
    }

    let optionsCanvas = options == null ? {} : JSON.parse(options);


    window.DropdownList.push(new Foundation.Dropdown($(`#${element}`), optionsCanvas));
}

function RevealRegister(element, options) {
    if (typeof window.RevealList == 'undefined') {
        window.RevealList = [];
    }

    let optionsCanvas = options == null ? {} : JSON.parse(options);


    window.RevealList.push(new Foundation.Reveal($(`#${element}`), optionsCanvas));
}



function DrilldownRegister(element, options) {
    if (typeof window.DrilldownList == 'undefined') {
        window.DrilldownList = [];
    }

    let optionsCanvas = options == null ? {} : JSON.parse(options);
    window.DrilldownList.push(new Foundation.Drilldown($(`#${element}`), optionsCanvas));
}

function DropdownMenuRegister(element, options) {
    if (typeof window.DropdownMenuList == 'undefined') {
        window.DropdownMenuList = [];
    }

    let optionsCanvas = options == null ? {} : JSON.parse(options);
    window.DropdownMenuList.push(new Foundation.DropdownMenu($(`#${element}`), optionsCanvas));
}

function StickyRegister(element, options) {
    if (typeof window.StickyList == 'undefined') {
        window.StickyList = [];
    }

    let optionsCanvas = options == null ? {} : JSON.parse(options);
    window.StickyList.push(new Foundation.Sticky($(`#${element}`), optionsCanvas));
}


function SliderRegister(element, options) {
    if (typeof window.SliderList == 'undefined') {
        window.SliderList = [];
    }

    let optionsCanvas = options == null ? {} : JSON.parse(options);
    window.SliderList.push(new Foundation.Slider($(`#${element}`), optionsCanvas));
}