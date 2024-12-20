# pnLoading
### Little description
This is a simple, cute loading screen used by me. 


## How to install

- Download the script from [here](https://github.com/PandaRomania/pnLoading/releases/tag/1.0.0)
- Drag & Drop the folder in your `resources` folder
- Remove the `-main` by renaming the folder
- Go to server.cfg
- Add this line of code `ensure pnLoading`
- Restart your server
- Done

## How can I change the song?

- Go to ui/src/configs/songs.config.js
- Chnage the song I've put or, add more using the code below:

```js
    {
        title: "Song Name",
        artist: "Song Artist",
        albumCover: "Song Cover",
        audioSrc: "../../assets/music/song.mp3" // Song Path, preferable to be putten in assets/music
    },
```
- If didn't already, add you .mp3 file to **__assets/music__**
- Open Command Prompt or Terminal in the UI file, and run `npm run build`
- Done

## How can I change staff that is shwon?

- Go to ui/src/configs/staff.config.js
- Chnage the staff member I've put or, add more using the code below:

```js
    {
        name: "Staff Name", // i.e Panda
        rank: "Staff Rank", // i.e Founder
        pfp: "https://cdn.discordapp.com/attachments/894988881890533427/1297301424069415003/db8600dbc8d52937f4e13f66c422e535.png?ex=6735ba5a&is=673468da&hm=53483ddaac42e5b53bb830421d11897981b2220a30e9a50e4673e6e2dbe0efb1&" // use discord cdn if possible, otherwise use assets/staffphotos/yourphoto.png ( example of the path: ../../assets/staffphotos/yourphoto.png )
    },
```
- If not already, add you .png file to **__assets/staffphotos__**
- Open Command Prompt or Terminal in the UI file, and run `npm run build`
- Done

## How can I chnage the colors ?

- Go to ui/tailwind.config.js
- Modify your color
- If you modified in index.css to, Open Command Prompt or Terminal in the UI file, and run `npm run build`
- Done


# Have fun, thanks for using my resource