const socket = io('/')
const VideoGrid = document.getElementById('videoGrid')
const my_peer = new Peer(undefined, {
    host: '/',
    port : '3001'
}); 
const MyVideo = document.createElement('video')
MyVideo.muted = true
navigator.mediaDevices.getUserMedia({
    audio: true
}).then(stream =>{
    addVideoStream(MyVideo, stream)

    my_peer.on('call', call=>{
        call.answer(stream)
    })
    socket.on('user-connected', userId =>{
        connectToNewUser(userId, stream)
        console.log("User Connected : ", "User Id :: ", userId)
    })
})
    
    
my_peer.on('open', id =>{
socket.emit('join-room', ROOM_ID, id)
})
function addVideoStream(video, stream){
    video.srcObject = stream
    video.addEventListener('loadedmetadata', ()=>{
        video.play()
    })
     
}
function connectToNewUser(userId, stream){
    const call = my_peer.call(userId, stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream =>{
        addVideoStream(video, userVideoStream)
    })
    call.on('close', ()=>{
        video.remove()
    })
}
