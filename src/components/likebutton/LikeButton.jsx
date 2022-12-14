import { useDispatch } from "react-redux"


function LikeButton() {
    const dispatch = useDispatch()
  return (
    <div >
        <i class="fa-solid fa-heart"></i>
        </div>
  )
}

export default LikeButton