const modalCreate = function(buttons = []) {
    const $modal = _createModal(buttons)
    const ANIMATION_SPEED = 250

    return {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                $modal.remove()
            }, ANIMATION_SPEED)
            
        }
    }
}

function noop() {} //// Empty function for buttons if there no handlers given

Element.prototype.appendAfter = function (element) { // All elements now have this method
    element.parentNode.insertBefore(this, element.nextSibling) // Taken from stackoverflow.com
}

const _createModal = function(buttons) {
    const modal = document.createElement('div')
    
    modal.classList.add('modal')

    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">Choose pair:</span>
            </div>
            <div class="modal-body" data-input="true">
                <div class="select-container">
                    <select>
                        <option>loh</option>
                        <option>loh2</option>
                    </select>
                    <select>
                        <option>loh3</option>
                        <option>loh4</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    `)

    const footer = _createModalFooter(buttons)
    footer.appendAfter(modal.querySelector('[data-input]'))
    document.body.appendChild(modal)
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

export default modalCreate