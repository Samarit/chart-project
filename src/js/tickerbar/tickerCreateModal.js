import modalCreate from "./modal/modalCreate";

export default function tickerCreateModal() {
    return new Promise ((resolve, reject) => {
        const modal = modalCreate([
            {
                type: 'confirm',
                text: 'Ok',
                handler (e) {
                    modal.close()
                    resolve()
                }
            },
            {
                type: 'cancel',
                text: 'Cancel',
                handler (e) {
                    if (e.target !== this) return
                    modal.close()
                    reject(new Error)
                }
            }
        ])

        modal.open()
    })
}
