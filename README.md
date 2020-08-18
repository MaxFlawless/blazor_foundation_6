![](https://img.shields.io/badge/License-MIT-blueviolet)
![](https://img.shields.io/badge/Foundation-6.6.3-blue)
![](https://img.shields.io/nuget/v/Fl.Blazor.Foundation?label=Latest)
![](https://img.shields.io/nuget/dt/Fl.Blazor.Foundation?label=Downloads)

# Introduction 
This project is some of the implementation of [Foundation Zurb](https://get.foundation/index.html) for Blazor.
This will help you build via component rather than full HTML.

See [Foundation 6 Official Docs](https://get.foundation/sites/docs/)

# Contribute
You can report issues or create pull requests on [github](https://github.com/MaxFlawless/blazor_foundation_6).

# Dependencies
- [Newtonsoft.Json (>= 12.0.3)](https://www.nuget.org/packages/Newtonsoft.Json/)

# Get Started
Depending if you're using Blazor Server or Blazor WASM, import:

<pre style="color:#000000;background:#ffffff;"><span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">link</span> href=<span style="color:#2a00ff; ">"/_content/fl.blazor.foundation/css/foundation.css"</span> rel=<span style="color:#2a00ff; ">"stylesheet"</span> <span style="color:#7f0055; ">/&gt;</span>
</pre>
in the header of _Host.cshtml or Index.html. <i>foundation.min.css</i> also available.

Then, import:

<pre style="color:#000000;background:#ffffff;"><span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">script</span> src=<span style="color:#2a00ff; ">"/_content/fl.blazor.foundation/js/jquery.js"</span><span style="color:#7f0055; ">&gt;</span><span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">script</span><span style="color:#7f0055; ">&gt;</span>
<span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">script</span> src=<span style="color:#2a00ff; ">"/_content/fl.blazor.foundation/js/foundation.js"</span><span style="color:#7f0055; ">&gt;</span><span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">script</span><span style="color:#7f0055; ">&gt;</span>
<span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">script</span> src=<span style="color:#2a00ff; ">"/_content/fl.blazor.foundation/js/blazor-foundation.js"</span><span style="color:#7f0055; ">&gt;</span><span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">script</span><span style="color:#7f0055; ">&gt;</span>
</pre>
in the same file, after _framework/blazor.server.js or blazor.webassembly.js. <i>foundation.min.js</i> also available.

We are trying to keep Foundation to the latest version available.

Note: <b>blazor-foundation.js</b> file is a custom function file used by the components' JSinterop to initializing and trigger actions via c#.
Note 2: you can remove <b>blazor-foundation.js</b> if you decide to manage the foundation components via JS directly rather than c#.
# Documentation
Most of the Foundation 6 Elements are available as components in Blazor. 

Below you will find to full list and example of the supported elements and feel free to consult [Foundation 6 Docs](https://get.foundation/sites/docs/).

Note: All the code is well documented with VS2019. You can pause at any tag attribute and read their description and options.

## Containers ([Accordions](https://get.foundation/sites/docs/responsive-accordion-tabs.html))
List of Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Accrodion Class.
- <b>Id</b>: Default HTML id="" attribute.
- <b>AutoManaged</b>: When True, Blazor will user our custom JS library to register the foundation component without any further action needed. (Must include js/blazor-foundation.js in HTML file.).
- <b>DataOptions</b>: can include any [Plugin Options](https://get.foundation/sites/docs/responsive-accordion-tabs.html#plugin-options) available.

Example:
<pre style='color:#000000;background:#ffffff;'>
<span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>Accordion</span> Id=<span style='color:#2a00ff; '>"MainAccordions"</span> DataOptions=<span style='color:#2a00ff; '>"@(new JObject() { { "</span>data-allow-all-closed<span style='color:#2a00ff; '>", true} })"</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>AccordionItem</span> Title=<span style='color:#2a00ff; '>"Test Title A"</span><span style='color:#7f0055; '>></span>Test Content A<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>AccordionItem</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>AccordionItem</span> Title=<span style='color:#2a00ff; '>"Test Title B"</span><span style='color:#7f0055; '>></span>Test Content B<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>AccordionItem</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>AccordionItem</span> Title=<span style='color:#2a00ff; '>"Test Title C"</span><span style='color:#7f0055; '>></span>Test Content C<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>AccordionItem</span><span style='color:#7f0055; '>></span>
<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>Accordion</span><span style='color:#7f0055; '>></span>
</pre>

## Containers ([Callout](https://get.foundation/sites/docs/responsive-accordion-tabs.html))

List of Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default class.
- <b>CloseButtonClass</b>: Extra/Custom Classes appended to the default class.
- <b>TypeClass</b>: secondary, primary, success, warning or alert.
- <b>Id</b>: Default HTML id="" attribute.
- <b>ClosableData</b>: Animation when closing the callout. See ([Motion UI](https://get.foundation/sites/docs/motion-ui.html))
- <b>CloseButton</b>: True to be visible.
- <b>Size</b>: small or large.

Example:
<pre style='color:#000000;background:#ffffff;'>
<span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>Callout</span> ClosableData=<span style='color:#2a00ff; '>"slide-out-right"</span> CloseButton=<span style='color:#2a00ff; '>"true"</span> Size=<span style='color:#2a00ff; '>"small"</span> TypeClass=<span style='color:#2a00ff; '>"alert"</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; font-weight:bold; '>h5</span><span style='color:#7f0055; '>></span>This is a small callout<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; font-weight:bold; '>h5</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; font-weight:bold; '>p</span><span style='color:#7f0055; '>></span>It has an easy to override visual style, and is appropriately subdued.<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; font-weight:bold; '>p</span><span style='color:#7f0055; '>></span>
<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>Callout</span><span style='color:#7f0055; '>></span>

<span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>Callout</span> Size=<span style='color:#2a00ff; '>"small"</span> TypeClass=<span style='color:#2a00ff; '>"success"</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; font-weight:bold; '>h5</span><span style='color:#7f0055; '>></span>This is a small callout<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; font-weight:bold; '>h5</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; font-weight:bold; '>p</span><span style='color:#7f0055; '>></span>It has an easy to override visual style, and is appropriately subdued.<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; font-weight:bold; '>p</span><span style='color:#7f0055; '>></span>
<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>Callout</span><span style='color:#7f0055; '>></span>

<span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>Callout</span> Size=<span style='color:#2a00ff; '>"large"</span> TypeClass=<span style='color:#2a00ff; '>"warning"</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; font-weight:bold; '>h5</span><span style='color:#7f0055; '>></span>This is a large callout<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; font-weight:bold; '>h5</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; font-weight:bold; '>p</span><span style='color:#7f0055; '>></span>It has an easy to override visual style, and is appropriately subdued.<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; font-weight:bold; '>p</span><span style='color:#7f0055; '>></span>
<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>Callout</span><span style='color:#7f0055; '>></span>
</pre>


## Containers ([Card](https://get.foundation/sites/docs/responsive-accordion-tabs.html))
List of Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Class.
- <b>Id</b>: Default HTML id="" attribute.

Example:
<pre style='color:#000000;background:#ffffff;'><span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>Card</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>CardDivider</span><span style='color:#7f0055; '>></span>Test <span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>CardDivider</span><span style='color:#7f0055; '>></span>
    <span style='color:#7f0055; '>&lt;</span><span style='color:#7f0055; '>CardSection</span><span style='color:#7f0055; '>></span>
        My Card Content
    <span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>CardSection</span><span style='color:#7f0055; '>></span>
<span style='color:#7f0055; '>&lt;/</span><span style='color:#7f0055; '>Card</span><span style='color:#7f0055; '>></span>
</pre>



## Containers ([Dropdown](https://get.foundation/sites/docs/dropdown.html))
List of Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default class.
- <b>Id</b>: Default HTML id="" attribute.
- <b>AutoManaged</b>: When True, Blazor will user our custom JS library to register the foundation component without any further action needed. (Must include js/blazor-foundation.js in HTML file.).
- <b>DataOptions</b>: can include any [Plugin Options](https://get.foundation/sites/docs/dropdown.html#javascript-reference) available.
- <b>Position</b>: Position of the Bubble.
- <b>DataAligment</b>: Position of Content (Seems not to work)

Example:

<pre style="color:#000000;background:#ffffff;"><span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">Button</span> DataToggle=<span style="color:#2a00ff; ">"OpenDropdownExample"</span><span style="color:#7f0055; ">&gt;</span>Open Dropdown<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">Button</span><span style="color:#7f0055; ">&gt;</span>
<span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">Dropdown</span> Id=<span style="color:#2a00ff; ">"OpenDropdownExample"</span> Position=<span style="color:#2a00ff; ">"top"</span> DataAlignment=<span style="color:#2a00ff; ">"top"</span><span style="color:#7f0055; ">&gt;</span>
    This is a Dropdown Example
<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">Dropdown</span><span style="color:#7f0055; ">&gt;</span>
</pre>

## Containers ([Media-Object](https://get.foundation/sites/docs/media-object.html))
MediaObjectWrapper Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default class.
- <b>Id</b>: Default HTML id="" attribute.

MediaObjectSection Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default class.
- <b>Id</b>: Default HTML id="" attribute.

Thumbnail Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default class.
- <b>Id</b>: Default HTML id="" attribute.

Example:

<pre style="color:#000000;background:#ffffff;"><span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">MediaObjectWrapper</span><span style="color:#7f0055; ">&gt;</span>
    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">MediaObjectSection</span> Class=<span style="color:#2a00ff; ">"middle"</span><span style="color:#7f0055; ">&gt;</span>
        <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">Thumbnail</span><span style="color:#7f0055; ">&gt;</span>
            <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">img</span> src=<span style="color:#2a00ff; ">"img/avatar-2.jpg"</span> <span style="color:#7f0055; ">/&gt;</span>
        <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">Thumbnail</span><span style="color:#7f0055; ">&gt;</span>
    <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">MediaObjectSection</span><span style="color:#7f0055; ">&gt;</span>
    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">MediaObjectSection</span><span style="color:#7f0055; ">&gt;</span>
        <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">h4</span><span style="color:#7f0055; ">&gt;</span>Why is it so important to dream?<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">h4</span><span style="color:#7f0055; ">&gt;</span>
        <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>So, once we've made the plant, how do we go out? Hope you have something more elegant in mind than shooting me in the head? A kick. What's a kick? This, Ariadne, would be a kick.<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>
        <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea. Resilient... highly contagious. Once an idea has taken hold of the brain it's almost impossible to eradicate. An idea that is fully formed - fully understood - that sticks; right in there somewhere.<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>
        <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">MediaObjectSection</span><span style="color:#7f0055; ">&gt;</span>
            <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">MediaObjectSection</span> Class=<span style="color:#2a00ff; ">"middle"</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">Thumbnail</span><span style="color:#7f0055; ">&gt;</span>
                    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">img</span> src=<span style="color:#2a00ff; ">"img/avatar-2.jpg"</span> <span style="color:#7f0055; ">/&gt;</span>
                <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">Thumbnail</span><span style="color:#7f0055; ">&gt;</span>
            <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">MediaObjectSection</span><span style="color:#7f0055; ">&gt;</span>
            <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">MediaObjectSection</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">h4</span><span style="color:#7f0055; ">&gt;</span>Why is it so important to dream?<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">h4</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>So, once we've made the plant, how do we go out? Hope you have something more elegant in mind than shooting me in the head? A kick. What's a kick? This, Ariadne, would be a kick.<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea. Resilient... highly contagious. Once an idea has taken hold of the brain it's almost impossible to eradicate. An idea that is fully formed - fully understood - that sticks; right in there somewhere.<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>
            <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">MediaObjectSection</span><span style="color:#7f0055; ">&gt;</span>
        <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">MediaObjectSection</span><span style="color:#7f0055; ">&gt;</span>
    <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">MediaObjectSection</span><span style="color:#7f0055; ">&gt;</span>

<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">MediaObjectWrapper</span><span style="color:#7f0055; ">&gt;</span>
</pre>

## Containers ([Off-Canvas](https://get.foundation/sites/docs/off-canvas.html))

OffCanvas Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Accrodion Class.
- <b>Id</b>: Default HTML id="" attribute.
- <b>Position</b>: Position of the off-canvas (position-Top, position-Bottom, position-Left or position-Right).
- <b>DataTransition</b>: Transition Style (overlap or push).
- <b>Absolute</b>: True if Off-Canvas is Absolute Position.
- <b>CloseOnClick</b>: True: Off-Convas will close if usedr click outside the window.
- <b>ContentOverlay</b>: True: Off-Convas will have a tint overlay.
- <b>AutoManaged</b>: When True, Blazor will user our custom JS library to register the foundation component without any further action needed. (Must include js/blazor-foundation.js in HTML file.).
- <b>DataOptions</b>: can include any [Plugin Options](https://get.foundation/sites/docs/off-canvas.html#javascript-reference) available.

OffCanvasWrapper Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Accrodion Class.
- <b>Id</b>: Default HTML id="" attribute.

OffCanvasContent Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Accrodion Class.
- <b>Id</b>: Default HTML id="" attribute.

Example:

<pre style="color:#000000;background:#ffffff;"> <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">OffCanvasWrapper</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">OffCanvas</span> @ref=<span style="color:#2a00ff; ">"OffCanvasBottom"</span> Id=<span style="color:#2a00ff; ">"MainCanvasBottom"</span> DataTransition=<span style="color:#2a00ff; ">"push"</span> Position=<span style="color:#2a00ff; ">"position-bottom"</span> CloseOnClick=<span style="color:#2a00ff; ">"true"</span> ContentOverlay=<span style="color:#2a00ff; ">"true"</span><span style="color:#7f0055; ">&gt;</span>
                    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>My Menu<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">OffCanvas</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">OffCanvas</span> Id=<span style="color:#2a00ff; ">"MainCanvasLeft"</span> DataTransition=<span style="color:#2a00ff; ">"overlap"</span> Position=<span style="color:#2a00ff; ">"position-left"</span> CloseOnClick=<span style="color:#2a00ff; ">"true"</span> ContentOverlay=<span style="color:#2a00ff; ">"true"</span><span style="color:#7f0055; ">&gt;</span>
                    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>My Menu<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">OffCanvas</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">OffCanvas</span> Id=<span style="color:#2a00ff; ">"MainCanvasRight"</span> DataTransition=<span style="color:#2a00ff; ">"overlap"</span> Position=<span style="color:#2a00ff; ">"position-right"</span> CloseOnClick=<span style="color:#2a00ff; ">"true"</span> ContentOverlay=<span style="color:#2a00ff; ">"true"</span><span style="color:#7f0055; ">&gt;</span>
                    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>My Menu<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">OffCanvas</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">OffCanvas</span> Id=<span style="color:#2a00ff; ">"MainCanvasTop"</span> DataTransition=<span style="color:#2a00ff; ">"push"</span> Position=<span style="color:#2a00ff; ">"position-top"</span> CloseOnClick=<span style="color:#2a00ff; ">"true"</span> ContentOverlay=<span style="color:#2a00ff; ">"true"</span><span style="color:#7f0055; ">&gt;</span>
                    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>My Menu<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">OffCanvas</span><span style="color:#7f0055; ">&gt;</span>
                <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">OffCanvasContent</span><span style="color:#7f0055; ">&gt;</span>
		<span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">ButtonGroup</span> Size=<span style="color:#2a00ff; ">"small"</span> Color=<span style="color:#2a00ff; ">"success"</span><span style="color:#7f0055; ">&gt;</span>
                        <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">Button</span> DataToggle=<span style="color:#2a00ff; ">"MainCanvasBottom"</span><span style="color:#7f0055; ">&gt;</span>Open Bottom<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">Button</span><span style="color:#7f0055; ">&gt;</span>
                        <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">Button</span> DataToggle=<span style="color:#2a00ff; ">"MainCanvasTop"</span><span style="color:#7f0055; ">&gt;</span>Open Top<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">Button</span><span style="color:#7f0055; ">&gt;</span>
                        <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">Button</span> DataToggle=<span style="color:#2a00ff; ">"MainCanvasLeft"</span><span style="color:#7f0055; ">&gt;</span>Open Left<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">Button</span><span style="color:#7f0055; ">&gt;</span>
                        <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">Button</span> DataToggle=<span style="color:#2a00ff; ">"MainCanvasRight"</span><span style="color:#7f0055; ">&gt;</span>Open Right<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">Button</span><span style="color:#7f0055; ">&gt;</span>
                    <span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">ButtonGroup</span><span style="color:#7f0055; ">&gt;</span>
	<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">OffCanvasContent</span><span style="color:#7f0055; ">&gt;</span>
<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">OffCanvasWrapper</span><span style="color:#7f0055; ">&gt;</span>
</pre>


## Containers ([Reveal](https://get.foundation/sites/docs/reveal.html))

OffCanvas Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Accrodion Class.
- <b>Id</b>: Default HTML id="" attribute.
- <b>Position</b>: Position of the off-canvas (position-Top, position-Bottom, position-Left or position-Right).
- <b>DataTransition</b>: Transition Style (overlap or push).
- <b>Absolute</b>: True if Off-Canvas is Absolute Position.
- <b>CloseOnClick</b>: True: will close if user click outside the window.
- <b>ContentOverlay</b>: True: Off-Convas will have a tint overlay.
- <b>AutoManaged</b>: When True, Blazor will user our custom JS library to register the foundation component without any further action needed. (Must include js/blazor-foundation.js in HTML file.).
- <b>DataOptions</b>: can include any [Plugin Options](https://get.foundation/sites/docs/reveal.html) available.
- <b>AnimationIn</b>: Animation when modal opens. See ([Motion UI](https://get.foundation/sites/docs/motion-ui.html))
- <b>AnimationOut</b>: Animation when modal opens. See ([Motion UI](https://get.foundation/sites/docs/motion-ui.html))


OffCanvasWrapper Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Accrodion Class.
- <b>Id</b>: Default HTML id="" attribute.

OffCanvasContent Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Accrodion Class.
- <b>Id</b>: Default HTML id="" attribute.

Example:


<pre style="color:#000000;background:#ffffff;"><span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">Button</span> DataOpen=<span style="color:#2a00ff; ">"RevealTest"</span><span style="color:#7f0055; ">&gt;</span>Test Modal<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">Button</span><span style="color:#7f0055; ">&gt;</span>
<span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">Reveal</span> Id=<span style="color:#2a00ff; ">"RevealTest"</span> AnimationIn=<span style="color:#2a00ff; ">"slide-in-left"</span> AnimationOut=<span style="color:#2a00ff; ">"slide-out-right"</span><span style="color:#7f0055; ">&gt;</span>
    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">h2</span><span style="color:#7f0055; ">&gt;</span>Label for the Modal!<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">h2</span><span style="color:#7f0055; ">&gt;</span>
    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>I am even more accessible than the other modals.<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">p</span><span style="color:#7f0055; ">&gt;</span>
<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">Reveal</span><span style="color:#7f0055; ">&gt;</span>
</pre>


## Containers ([Tabs](https://get.foundation/sites/docs/responsive-accordion-tabs.html))

TabHeader Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Class.
- <b>Id</b>: Default HTML id="" attribute.
- <b>Vertical</b>: True: Header will be Vertical.
- <b>AutoManaged</b>: When True, Blazor will user our custom JS library to register the foundation component without any further action needed. (Must include js/blazor-foundation.js in HTML file.).
- <b>DataOptions</b>: can include any [Plugin Options](https://get.foundation/sites/docs/responsive-accordion-tabs.html#javascript-reference) available.


TabHeaderTitle Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Class.
- <b>Id</b>: Default HTML id="" attribute.
- <b>Active</b>: True when tab is default active. 

TabContentWrapper Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Class.
- <b>Id</b>: Default HTML id="" attribute.
- <b>LinkId</b>: Id of the TabHeader.

TabContent Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Class.
- <b>Id</b>: Default HTML id="" attribute.
- <b>Active</b>: True when tab is default active. 


Example:


<pre style="color:#000000;background:#ffffff;"><span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">TabHeader</span> Id=<span style="color:#2a00ff; ">"Test-Tab"</span><span style="color:#7f0055; ">&gt;</span>
    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">TabHeaderTitle</span> Id=<span style="color:#2a00ff; ">"Test-Tab-Panel-1"</span><span style="color:#7f0055; ">&gt;</span>Test 1<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">TabHeaderTitle</span><span style="color:#7f0055; ">&gt;</span>
    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">TabHeaderTitle</span> Id=<span style="color:#2a00ff; ">"Test-Tab-Panel-2"</span><span style="color:#7f0055; ">&gt;</span>Test 2<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">TabHeaderTitle</span><span style="color:#7f0055; ">&gt;</span>
<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">TabHeader</span><span style="color:#7f0055; ">&gt;</span>
<span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">TabContentWrapper</span> LinkId=<span style="color:#2a00ff; ">"Test-Tab"</span><span style="color:#7f0055; ">&gt;</span>
    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">TabContent</span> Id=<span style="color:#2a00ff; ">"Test-Tab-Panel-1"</span><span style="color:#7f0055; ">&gt;</span>Test Panel 1<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">TabContent</span><span style="color:#7f0055; ">&gt;</span>
    <span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; ">TabContent</span> Id=<span style="color:#2a00ff; ">"Test-Tab-Panel-2"</span><span style="color:#7f0055; ">&gt;</span>Test Panel 2<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">TabContent</span><span style="color:#7f0055; ">&gt;</span>
<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; ">TabContentWrapper</span><span style="color:#7f0055; ">&gt;</span>
</pre>


## Controls ([Button](https://get.foundation/sites/docs/button.html))

Button Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Class.
- <b>Id</b>: Default HTML id="" attribute.
- <b>DataToggle</b>: Foundation Data to Toggle On/Off
- <b>DataToggle</b>: Foundation Data to Toggle On/Off

Example:

<pre style="color:#000000;background:#ffffff;"><span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">Button</span><span style="color:#7f0055; ">&gt;</span>A Button<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">Button</span><span style="color:#7f0055; ">&gt;</span>
</pre>

## Controls ([ButtonGroup](https://get.foundation/sites/docs/button-group.html))

ButtonGroup Attributes:
- <b>Class</b>: Extra/Custom Classes appended to the default Class.
- <b>Id</b>: Default HTML id="" attribute.
- <b>Size</b>: tiny, small or large ([More](https://get.foundation/sites/docs/button-group.html#sizing))
- <b>Color</b>: primary, secondary, success, warning or alert ([More](https://get.foundation/sites/docs/button-group.html#coloring))
- <b>NoGaps</b>: Gaps ([More](https://get.foundation/sites/docs/button-group.html#no-gaps))
- <b>FullEvenWidth</b>: Even Width ([More](https://get.foundation/sites/docs/button-group.html#even-width-group))
- <b>OnClick</b>: OnClick Option

Example:

<pre style="color:#000000;background:#ffffff;"><span style="color:#7f0055; ">&lt;</span><span style="color:#7f0055; font-weight:bold; ">Button</span><span style="color:#7f0055; ">&gt;</span>A Button<span style="color:#7f0055; ">&lt;/</span><span style="color:#7f0055; font-weight:bold; ">Button</span><span style="color:#7f0055; ">&gt;</span>
</pre>