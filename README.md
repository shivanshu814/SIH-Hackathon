# <p align="center">Code-XTalk P2P</p>

<p align="center">Free WebRTC - P2P - Simple, Secure, Fast Real-Time Video Conferences Up to 4k and 60fps, compatible with all browsers and platforms.</p>


<hr />

<p align="center">
    <a href="https://p2p.codex.com"><img src="public/images/audio.gif"></a>
</p>

<hr />

<p align="center">
    For questions, discussions, help & support, join with us on   <a href="https://discord.gg/">discord</a>
</p>

<hr />

<details>
<summary>Features</summary>

<br/>

-   Is `100% Free` - `Open Source` - `Self Hosted` and [PWA](https://en.wikipedia.org/wiki/Progressive_web_application)!
-   No download, plug-in, or login required, entirely browser-based
-   Unlimited number of conference rooms without call time limitation
-   Translated in 133 languages
-   Secure Room Lock feature for private meetings
-   Multilingual Support for inclusivity
-   Unrestricted Call Duration, no limitations on call duration
-   Ultra-High-Definition Video with 4K quality
-   Integrated Screen Recording for capturing important discussions
-   Snapshot Capability for capturing crucial moments
-   AI-Powered Chat Speaker for auditory reading of messages
-   Customizable UI Themes to personalize your experience
-   Captions Support for enhanced accessibility

</details>

<details>
<summary>About</summary>

-   [Presentation](https://www.canva.com/design/DAE693uLOIU/view)

-   [Video](https://www.youtube.com/watch?v=_IVn2aINYww)

</details>

<details>
<summary>Start videoconference</summary>

<br/>

-   `Open` https://p2p.codex.com/newcall
-   `Pick` your Room name and Join
-   `Allow` using the camera and microphone
-   `Share` the Room URL and Wait for someone to join for the video conference

</details>

<details>
<summary>Direct Join</summary>

<br/>

-   You can `join` directly to `room` by going to:
-   https://p2p.codex.com/join?room=test&name=codextalk&audio=0&video=0&screen=0&notify=0

    | Params | Type    | Description     |
    | ------ | ------- | --------------- |
    | room   | string  | room Id         |
    | name   | string  | user name       |
    | audio  | boolean | audio stream    |
    | video  | boolean | video stream    |
    | screen | boolean | screen stream   |
    | notify | boolean | welcome message |

> **Note**
>
> When [host protection is enabled](https://github.com/codex/mirotalk/commit/285c92605585bf204996dc0bade9b3e7c62d75df#commitcomment-103108955) the host needs to provide a valid username and password as specified in the `.env`.
>
> After host authentication, participants can join the room using any of the following URL formats:
>
> -   https://p2p.codex.com/join/test (URL path)
> -   https://p2p.codex.com/join/?room=test&name=codextalk&audio=0&video=0&screen=0&notify=0 (URL with query parameters for direct join)

</details>

<details>
<summary>Embed a meeting</summary>

<br/>

Embedding a meeting into a service or app using an iframe.

```html
<iframe
    allow="camera; microphone; display-capture; fullscreen; clipboard-read; clipboard-write; autoplay"
    src="https://p2p.codex.com/newcall"
    style="height: 100vh; width: 100vw; border: 0px;"
></iframe>
