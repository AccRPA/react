export default function Modal({showBackdrop, children}){
    if (!showBackdrop){
        return <div className="modal-container">
                {children}
            </div>;
    }else{
        return <div className="modal">
                {showBackdrop && <div className="modal-backdrop"></div>}
                <div className="modal-container">
                    {children}
                </div>
            </div>;

    }
}