import {forwardRef,useImperativeHandle,useRef} from 'react';
import { createPortal } from 'react-dom';   
let ResultModal=forwardRef (function({result,targettime,setclearingtime},ref) {
    let dialog=useRef();
   useImperativeHandle(ref,()=>({
    open:()=>{dialog.current.showModal()},
   }));
    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={setclearingtime}>
            <h2>you {result<=0 ?'lost':'won'}</h2>
            <p>The target time was <strong>{targettime}</strong></p>
            <p>you stopped the timer with <strong>{(result/1000).toFixed(2)} seconds left</strong></p>
            <form method="dialog" onSubmit={setclearingtime}>
                <button>close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})

export default ResultModal;