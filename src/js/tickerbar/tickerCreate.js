import modalCreate from "./modal/modalCreate";

export default function tickerCreate() {
    return new Promise ((resolve, reject) => {
        const modal = modalCreate([
            {
                type: 'confirm',
                text: 'Ok',
                handler () {
                    console.log('confirmed')
                    modal.close()
                    resolve()
                }
            },
            {
                type: 'cancel',
                text: 'Cancel',
                handler () {
                    console.log('rejected')
                    modal.close()
                    reject(error)
                }
            }
        ])

            modal.open()
    })
}
