const modalCreate = function(buttons = []) {
    const $modal = _createModal(buttons)
    let closing = false

    return {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
            closing = true
            $modal.classList.add('hide')
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
    const DEFAULT_WIDTH = '200px'

    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
        <div class="modal-window" style="width: ${DEFAULT_WIDTH}">
            <div class="modal-header">
                <span class="modal-title">Choose pair:</span>
            </div>
            <div class="modal-body" data-input="true">
                Body test text
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