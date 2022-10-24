import styles from '../styles/Speaker.module.css'

export default function Speaker({name, designation}){
    return(
        <div className="py-2 mx-auto w-64">
            <div className="rounded-lg" style={{backgroundColor: "#022a36", borderRadius: "0.75rem"}}>
                <div>
                    <div className={`absolute ${styles.cardSpeak} h-48 w-64 duration-200 ease-in`} style={{ borderTopLeftRadius: "0.75rem", borderTopRightRadius: "0.75rem"}}></div>
                <img src="https://images.pexels.com/photos/6325954/pexels-photo-6325954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-t-lg h-48 w-64" style={{borderTopLeftRadius: "0.75rem", borderTopRightRadius: "0.75rem"}} />
                </div>
                <div className="text-center pt-3 pb-6 h-32 px-1">
                    <h2 className="text-xl font-semibold" style={{color: "rgb(232, 76, 61)"}}>{name}</h2>
                    <p className="text-gray-300">{designation}</p>
                </div>
            </div>
        </div>
    )
}