import modalOptions from "./modalOptions"

const modalCreate = function(buttons = []) {
    const $modal = _createModal(buttons)
    const overlay = $modal.querySelector('.modal-overlay')
    const closeModal = buttons[1].handler
    const ANIMATION_SPEED = 250

    return {
        open() {
            $modal.classList.add('modal-open')
            overlay.addEventListener('click', closeModal)
        },
        close() {
            $modal.classList.remove('modal-open')
            $modal.classList.add('hide') //Class for animate close action
            setTimeout(() => {
                $modal.classList.remove('hide')
                overlay.removeEventListener('click', closeModal)
                $modal.remove()
            }, ANIMATION_SPEED)
            
        }
    }
}

function noop() {} // Empty function for buttons if there no handlers given

Element.prototype.appendAfter = function (element) { // All elements now have this method
    element.parentNode.insertBefore(this, element.nextSibling) // Taken from stackoverflow.com
}

const _createModal = function(buttons) {
    const modal = document.createElement('div')
    
    modal.classList.add('modal')

    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">Choose pair:</span>
            </div>
            <div class="modal-body" data-input="true">
                <div class="select-container"></div>
            </div>
        </div>
    </div>
    `)

    const selectContainer = modal.querySelector('.select-container')
    const select1 = _createModalSelect(modalOptions[0])
    const select2 = _createModalSelect(modalOptions[1])
    select1.dataset.selectPrimary = true
    select2.dataset.selectSecondary = true
    selectContainer.append(select1, select2)

    const footer = _createModalFooter(buttons)
    footer.appendAfter(modal.querySelector('[data-input]'))
    document.body.append(modal)

    return modal
}

const _createModalFooter = function(buttons) {
    if (buttons.length === 0) {
        return document.createElement('div')
    }

    const footer = document.createElement('div')
    footer.classList.add('modal-footer')

    buttons.forEach(btn => {
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.dataset.type = btn.type
        $btn.onclick = btn.handler || noop

        footer.append($btn) 
    })

    return footer
}

function  _createModalSelect(data) {
    const select = document.createElement('select')

    data.forEach(symb => {
        const option = document.createElement('option')
        option.value = symb
        option.innerText = symb
        select.append(option)
    })
    
    return select
}

export default modalCreate