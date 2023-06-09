import styles from './Modal.module.css'

interface IModalProps {
  children: React.ReactNode
}

export default function Modal ({ children }: IModalProps) {

  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector('#modal')
    modal!.classList.add("hide")
  }

  return (
    <div id="modal" className='hide'>
        <div className={styles.fade} onClick={closeModal}></div>
        <div className={styles.modal}>
            <h2>texto modal</h2>
            {children}
        </div>
    </div>
  );
}
