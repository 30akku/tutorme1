# TutorMe

React and Node.js tutoring collaboration app with room-based video calls, group chat, screen sharing, and screen recording.

Repository: https://github.com/30akku/tutorme1

## What It Does

TutorMe is a web app for online tutoring sessions. A user enters a room name and username, joins a shared room, and can collaborate with other users using video, audio, screen sharing, chat, and screen recording features.

The project combines a React frontend with an Express/Socket.IO signaling server and WebRTC peer connections.

## Key Features

- Join a tutoring room by room name and username.
- Real-time video/audio calling with WebRTC.
- Socket.IO signaling for room join, call setup, chat, and media state changes.
- Group chat panel inside the room.
- Camera and microphone toggles.
- Screen sharing support.
- Screen recording support through RecordRTC.
- Production build path for serving the React app from the Node server.

## Tech Stack

### Frontend

- React 16
- React Router
- styled-components
- Bootstrap / Reactstrap
- simple-peer
- socket.io-client
- RecordRTC

### Backend

- Node.js
- Express
- Socket.IO
- Morgan
- CORS

## Project Structure

```text
.
|-- package.json          # Root scripts for Heroku-style build/start
|-- client/
|   |-- package.json      # React app dependencies and scripts
|   `-- src/
|       |-- App.js
|       |-- socket.js
|       `-- components/
|           |-- Main/     # Room join screen
|           |-- Room/     # Video room, peers, screen share, chat integration
|           |-- Chat/     # Room chat UI
|           |-- Video/    # Remote video rendering
|           |-- BottomBar/# Media controls
|           `-- Recorder/ # Screen recording flow
`-- server/
    |-- package.json
    `-- index.js          # Express server and Socket.IO signaling events
```

## Socket Events

The server handles room and collaboration events including:

- `BE-check-user`
- `BE-join-room`
- `BE-call-user`
- `BE-accept-call`
- `BE-send-message`
- `BE-leave-room`
- `BE-toggle-camera-audio`

The frontend listens for matching `FE-*` events to update peers, chat messages, user media state, and errors.

## Getting Started

The project declares Node `16.13.2` in its package files.

### Install Dependencies

From the repository root:

```bash
npm run prepare-client
npm run prepare-server
```

Or install each side manually:

```bash
cd client
npm install

cd ../server
npm install
```

### Run Locally

Start the backend:

```bash
cd server
npm start
```

The backend uses port `3001` by default.

In a second terminal, start the frontend:

```bash
cd client
npm start
```

The React development server proxies API/socket traffic to `http://localhost:3001`.

## Production Build

The root package includes a Heroku-style build script:

```bash
npm run heroku-postbuild
npm start
```

In production mode, the Express server serves the compiled React app from `client/build`.

## Future Improvements

- Add a root README to replace the separate starter READMEs in `client/` and `server/`.
- Add screenshots or a short demo GIF of joining a room and starting a call.
- Add environment-based configuration for server URL and port.
- Add better cleanup for Socket.IO listeners when leaving rooms.
- Add tests for room join, chat, and media-control behavior.
