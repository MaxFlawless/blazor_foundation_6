/*
 * Copyright (c) OpenCodeDev
 * Created in 2021
 * Last Update in 2021
 * Version: 0.1-alpha
 * JS Version: ES5 && ES6
 * Contributors:
 *      Max Samson (m.samson@opencodedev.com)
 *      
 */
class MenuSystem {
    static SystemList = []; // All MenuSystem Available. (List of {})
    constructor(options) {
        this.uuid = MenuSystem.uuidv4(); // Create Unique ID (might be useful for later purpose)
        if (typeof options == 'undefined' || options === undefined) {
            throw "Null exception! You must defined options as JS Object in BFMenuSystem. See Doc on OCD's website :)";
        }

        // Check if id was defined
        if (options.id === undefined) {
            throw `You cannot create a MenuSystem without id for obvious reasons.`;
        }

        // Check if we found App;
        if (options.appId === undefined) {
            throw `BFMenuSystem couldn't find appId of null. To use BFMenuSystem you must define an ID for App. Sometimes it is simply the loader misplaced or loader loads before the app rendering.`;
        }

        this.appId = options.appId;
        this.id = options.id; // Set Unique ID (Dev Defined)

        // Defined Options (may need recursive update)
        // I was thinking of function then for each all elements from array [{name:'hasTop', default:false}...{name:'transitionType', default:'PushBoxed'}]
        // then do the logic below, each Capital would be replaced by its lowercase preceeded of '-' by convention.
        // so the code would like greatly shrinked, easier to add new option along the way and potentialy more performant overall.

        this.hasTop = options.hasTop === undefined ?
            (typeof $(`#${this.id}`).attr(`has-top`) !== typeof undefined && $(`#${this.id}`).attr(`has-top`) !== false) ?
                $(`#${this.id}`).attr(`has-top`) : true  : options.hasTop;

        this.transitionType = options.transitionType === undefined ?
            (typeof $(`#${this.id}`).attr(`transition-type`) !== typeof undefined && $(`#${this.id}`).attr(`transition-type`) !== false) ?
                $(`#${this.id}`).attr(`transition-type`) : 'PushBoxed'.toLocaleUpperCase() : options.transitionType.toLocaleUpperCase();

        this.hasOverlay = options.hasOverlay === undefined ?
            (typeof $(`#${this.id}`).attr(`has-overlay`) !== typeof undefined && $(`#${this.id}`).attr(`has-overlay`) !== false) ?
                $(`#${this.id}`).attr(`has-overlay`) : true : options.hasOverlay;
        if (!this.hasOverlay) { console.warn(`MenuSystem ${this.uuid} has no overlay, this may create unstability depending on the functionnality of your app. Note: it is better to set an overlay to prevent user from click on other function in the background.`); }

        this.overlayBlur = options.overlayBlur === undefined ?
            (typeof $(`#${this.id}`).attr(`overlay-blur`) !== typeof undefined && $(`#${this.id}`).attr(`overlay-blur`) !== false) ?
                $(`#${this.id}`).attr(`overlay-blur`) : true : options.overlayBlur;

        this.overlayAutoClose = options.overlayAutoClose === undefined ?
            (typeof $(`#${this.id}`).attr(`overlay-auto-close`) !== typeof undefined && $(`#${this.id}`).attr(`overlay-auto-close`) !== false) ?
                $(`#${this.id}`).attr(`overlay-auto-close`) : true : options.overlayAutoClose;

        this.overlayColor = options.overlayColor === undefined ?
            (typeof $(`#${this.id}`).attr(`overlay-color`) !== typeof undefined && $(`#${this.id}`).attr(`overlay-color`) !== false) ?
                $(`#${this.id}`).attr(`overlay-color`) : 'none' : options.overlayColor;

        this.topHeight = options.topHeight === undefined ?
            (typeof $(`#${this.id}`).attr(`top-height`) !== typeof undefined && $(`#${this.id}`).attr(`top-height`) !== false) ?
                $(`#${this.id}`).attr(`top-height`) : '4em' : options.topHeight;

        this.topBGColor = options.topBGColor === undefined ?
            (typeof $(`#${this.id}`).attr(`top-bg-color`) !== typeof undefined && $(`#${this.id}`).attr(`top-bg-color`) !== false) ?
                $(`#${this.id}`).attr(`top-bg-color`) : 'black' : options.topBGColor;

        this.leftWidth = options.leftWidth === undefined ?
            (typeof $(`#${this.id}`).attr(`left-width`) !== typeof undefined && $(`#${this.id}`).attr(`left-width`) !== false) ?
                $(`#${this.id}`).attr(`left-width`) : '15em' : options.leftWidth;

        this.leftBGColor = options.leftBGColor === undefined ?
            (typeof $(`#${this.id}`).attr(`left-bg-color`) !== typeof undefined && $(`#${this.id}`).attr(`left-bg-color`) !== false) ?
                $(`#${this.id}`).attr(`left-bg-color`) : 'black' : options.leftBGColor;

        this.leftCloseButton = options.leftCloseButton === undefined ?
            (typeof $(`#${this.id}`).attr(`right-close-button`) !== typeof undefined && $(`#${this.id}`).attr(`right-close-button`) !== false) ?
                $(`#${this.id}`).attr(`right-close-button`) : true : options.leftCloseButton;

        this.rightWidth = options.rightWidth === undefined ?
            (typeof $(`#${this.id}`).attr(`right-width`) !== typeof undefined && $(`#${this.id}`).attr(`right-width`) !== false) ?
                $(`#${this.id}`).attr(`right-width`) : '15em' : options.rightWidth;

        this.rightBGColor = options.rightBGColor === undefined ?
            (typeof $(`#${this.id}`).attr(`right-bg-color`) !== typeof undefined && $(`#${this.id}`).attr(`right-bg-color`) !== false) ?
                $(`#${this.id}`).attr(`right-bg-color`) : 'black' : options.rightBGColor;

        this.rightCloseButton = options.rightCloseButton === undefined ?
            (typeof $(`#${this.id}`).attr(`right-close-button`) !== typeof undefined && $(`#${this.id}`).attr(`right-close-button`) !== false) ?
                $(`#${this.id}`).attr(`right-close-button`) : true : options.rightCloseButton;

        // Add Overlay
        if (this.hasOverlay) {
            // If overlay not inserted prior to init then add it if necessary.
            if (!$(`#${this.id}>div[position="overlay"]`).length) {
                $(`#${this.id}`).append(`<div position="overlay" class="bf-menu-system-overlay"></div>`);
            }
            if (this.overlayAutoClose) {
                $(`#${this.id}>div[position="overlay"]`).click(() => {
                    this.close();
                });
            }
        }
        // find html elements
        // note: if not find, highly possible that dev didnt need the position so wont ever be called.
        this.overlay = $(`#${this.id}>div[position="overlay"]`);
        this.top = $(`#${this.id}>div[position="top"]`);
        this.left = $(`#${this.id}>div[position="left"]`);
        this.right = $(`#${this.id}>div[position="right"]`);
        this.app = $(`#${this.appId}`);

        if (this.left.length && this.leftCloseButton) {
            $(`#${this.id}>div[position="left"]`).prepend(`
                <div class="header-panel" >
                    <span data-id="close" class="mdi mdi-close-circle-outline close"></span>
                </div>
            `);
            let leftCloseButton = $(`#${this.id}>div[position="left"]>div>span[data-id="close"]`);
            leftCloseButton.click(() => {
                this.close();
            });
        }

        if (this.right.length && this.rightCloseButton) {
            $(`#${this.id}>div[position="right"]`).prepend(`
                <div class="header-panel" style="justify-content: flex-start;padding-right: 0;padding-left: 0.5em;">
                        <span data-id="close" class="mdi mdi-close-circle-outline close"></span>
                </div>
            `);
            let rightCloseButton = $(`#${this.id}>div[position="right"]>div>span[data-id="close"]`);
            rightCloseButton.click(() => {
                this.close();
            });
        }

        this.app.css('transition', '0.5s');
        this.status = {
            state : 'closed',
            position : null,
            panel : null,
            width: null,
            color: null
        }

        MenuSystem.SystemList.push(this); // Add self to global system registry

    }

    static uuidv4() {
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    // Universal Execution
    static find(id) {
        let object = MenuSystem.SystemList.find(p => p.id == id); // Find MenuSystem by id.
        if (object === undefined) {
            throw `Cannot find MenuSystem by ID '${id}'`;
        }
        return object; // return class
    }

    open(position) {
        // Open Logic
        let panel = null;
        let width = null;
        let color = null;
        if (position == 'left') {
            width = this.leftWidth;
            panel = this.left;
            color = this.leftBGColor;
        } else {
            panel = this.right;
            width = this.rightWidth;
            color = this.rightBGColor;
        }


        this.status = {
            state : "opened",
            position : position,
            panel : panel,
            width : width,
            color : color
        }


        // if not mobile top = visible
        if (this.top.css('visibility') != 'hidden' && this.hasTop) {
            if (this.transitionType == 'PUSHBOXED') {
                // PushBoxed means top is pushed as well
                this.app.css(`padding-top`, this.topHeight);
            }
            this.top.css('height', this.topHeight);
            this.top.css('background-color', this.topBGColor);
            this.top.css(`padding-${this.status.position}`, this.status.width);
        }

        if (this.transitionType == 'PUSH' || this.transitionType == 'PUSHBOXED') {
            this.app.css(`padding-${this.status.position}`, this.status.width);
        }

        this.status.panel.css('background-color', this.status.color);
        this.status.panel.css('width', this.status.width);
        this.app.css('overflow', 'hidden');
        this.app.css('height', '100vh');
        this.app.css('width', '100%');

        if (this.hasOverlay) {
            this.overlay.show();
            this.overlay.css('background-color',this.overlayColor);
            if (this.overlayBlur) {
                this.app.css('filter','blur(3px)');
            }
        }

    }

    close() {
        if (this.top.css('visibility') != 'hidden' && this.hasTop) {
            if (this.transitionType == 'PUSHBOXED') {
                this.app.css(`padding-top`, 0);
            }
            this.top.css('height', 0);
            this.top.css(`padding-${this.status.position}`, 0);
        }

        if (this.transitionType == 'PUSH' || this.transitionType == 'PUSHBOXED') {
            this.app.css(`padding-${this.status.position}`, 0);
        }

        this.app.css('overflow', '');
        this.app.css('height', '');
        this.app.css('width', '');
        this.status.panel.css('width', 0);
        if (this.hasOverlay) {
            this.overlay.hide();
            if (this.overlayBlur) {
                this.app.css('filter', '');
            }
        }
        this.status = {
            state: 'closed',
            position: null,
            panel: null,
            width: null,
            color: null
        }
    }
}