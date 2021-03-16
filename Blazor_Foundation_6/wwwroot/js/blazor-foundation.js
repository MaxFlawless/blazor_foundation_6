
function MenuSystemRegister(options) {
    new MenuSystem(JSON.parse(options)); // Create Menu System
}

function MenuSystemOpen(id, position) {
    MenuSystem.find(id).open(position);
}

function MenuSystemClose(id) {
    MenuSystem.find(id).close();
}

function FoundationDestroy(element) {
    $(`#${element}`).foundation('_destroy');
}

function OffCanvasRegister(element, options) {
    if (typeof window.OffCanvasList == 'undefined') {
        window.OffCanvasList = [];
    }
    console.log(`Register ${element}`);
    console.log(JSON.parse(options));
    let optionsCanvas = options == null ? { 'data-transition-time': 500 } : JSON.parse(options);
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

function AbideRegister(element, options) {
    if (typeof window.AbideList == 'undefined') {
        window.AbideList = [];
    }

    let optionsCanvas = options == null ? {} : JSON.parse(options);
    window.AbideList.push(new Foundation.Abide($(`#${element}`), optionsCanvas));
}

function CreditCardRegister(element, number, fullname, expiredate) {
    if (typeof window.CreditCardList == 'undefined') {
        window.CreditCardList = [];
    }
    window.CreditCardList.push(new Card({ form: 'form#'+element, container: '.' + element, placeholders: { number: number, name: fullname, expiry: expiredate, cvc: '***' } }));
    CreditCardType(element, number);
}

function CreditCardType(element, cardnumber) {
    let cardclass;
    let patterns = [
    {
        cardname: "unknown",
        pattern: /^[0-9][0-9][0-9][0-9]/,
        classname: "jp-card-unknown"
    },{
        cardname: "amex",
        pattern: /^3[47]/,
        classname: "jp-card-amex"
    },{
        cardname: "dankort",
        pattern: /^5019/,
        classname: "jp-card-dankort"
    }, {
        cardname: "dinersclub",
        pattern: /^(36|38|30[0-5])/,
        classname: "jp-card-dinersclub"
    }, {
        cardname: "discover",
        pattern: /^(6011|65|64[4-9]|622)/,
        classname: "jp-card-discover"

    }, {
        cardname: "elo",
        pattern: /^401178|^401179|^431274|^438935|^451416|^457393|^457631|^457632|^504175|^627780|^636297|^636369|^636368|^(506699|5067[0-6]\d|50677[0-8])|^(50900\d|5090[1-9]\d|509[1-9]\d{2})|^65003[1-3]|^(65003[5-9]|65004\d|65005[0-1])|^(65040[5-9]|6504[1-3]\d)|^(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|^(65054[1-9]|6505[5-8]\d|65059[0-8])|^(65070\d|65071[0-8])|^65072[0-7]|^(65090[1-9]|65091\d|650920)|^(65165[2-9]|6516[6-7]\d)|^(65500\d|65501\d)|^(65502[1-9]|6550[3-4]\d|65505[0-8])|^(65092[1-9]|65097[0-8])/,
        classname: "jp-card-elo"
    }, {
        cardname: "hipercard",
        pattern: /^(384100|384140|384160|606282|637095|637568|60(?!11))/,
        classname: "jp-card-hipercard"
    }, {
        cardname: "jcb",
        pattern: /^(308[8-9]|309[0-3]|3094[0]{4}|309[6-9]|310[0-2]|311[2-9]|3120|315[8-9]|333[7-9]|334[0-9]|352[8-9]|35[3-8][0-9])/,
        classname: "jp-card-jcb"
    }, {
        cardname: "laser",
        pattern: /^(6706|6771|6709)/,
        classname: "jp-card-laser"
    }, {
        cardname: "maestro",
        pattern: /^(5018|5020|5038|5078|5[6-9]|6304|6703|6708|6759|676[1-3])/,
        classname: "jp-card-maestro"
    }, {
        cardname: "mastercard",
        pattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
        classname: "jp-card-mastercard"
    }, {
        cardname: "mir",
        pattern: /^220[0-4][0-9][0-9]\d{10}$/,
        classname: "jp-card-mir"
    }, {
        cardname: "troy",
        pattern: /^9792/,
        classname: "jp-card-troy"
    }, {
        cardname: "unionpay",
        pattern: /^62/,
        classname: "jp-card-unionpay"
    }, {
        cardname: "visa",
        pattern: /^4/,
        classname: "jp-card-visa"
    }, {
        cardname: "visaelectron",
        pattern: /^4(026|17500|405|508|844|91[37])/,
        classname: "jp-card-visaelectron"
     }
    ];

    patterns.forEach(verifyPattern);

    function verifyPattern(item) {
        var result = cardnumber.match(item.pattern);

        if (result != null) {
            if (item.name == 'unknown') {
                cardclass = 'jp-card ' + item.classname;

            } else {
                cardclass = 'jp-card ' + item.classname + ' jp-card-identified';

            }
        }
        
        $('.' + element + ' > div.jp-card-container > div.jp-card').attr('class', cardclass );
    }
}