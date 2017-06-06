module.exports = class OverlapWatch {

    constructor(opts, elementB){

        if( typeof opts == 'string' ){
            this.opts = { elementA: document.querySelector(opts) }
        } else if( typeof opts == 'object' ) {
            this.opts = opts
        } else {
            this.opts = {}
        }

        if( elementB !== undefined ){
            this.opts.elementB = document.querySelector(elementB)
        }

        // Set up container
        if( ! this.opts.hasOwnProperty('container') ){
            this.opts.container = window
        }

        // Cancel early if required params not defined
        const log = !this.opts.hasOwnProperty('log') || this.opts.log
        if( !this.opts.elementA ){
            if( log ){
                console.warn('First element "' + this.opts.elementA + '" undefined, cancelling overlap check.')
            }
            return
        } else if( !this.opts.elementB ){
            if( log ){
                console.warn('Second element "' + this.opts.elementB + '" undefined, cancelling overlap check.')
            }
            return
        } else if( !this.opts.container ){
            if( log ){
                console.warn('Container "' + this.opts.container + '" undefined, cancelling overlap check.')
            }
            return
        }

        // Set up scroll listener
        this.opts.container.addEventListener('scroll', () => { this.refresh() })

        // Set up resize listener
        window.addEventListener('resize', () => this.refresh() )

        // Set up classname
        if( ! this.opts.hasOwnProperty('class') ){
            this.opts.class = 'overlapping'
        }

    }

    refresh(){
        if( this.overlapping( this.opts.elementA, this.opts.elementB ) ){
            this.opts.elementA.classList.add( this.opts.class )
            this.opts.elementB.classList.add( this.opts.class )
        } else {
            this.opts.elementA.classList.remove( this.opts.class )
            this.opts.elementB.classList.remove( this.opts.class )
        }
    }

    overlapping( elementA, elementB ){
        var a = elementA.getBoundingClientRect()
        var b = elementB.getBoundingClientRect()

        return !(
            a.left + a.width < b.left ||
            b.left + b.width < a.left ||
            a.top + a.height < b.top ||
            b.top + b.height < a.top
        )
    }
}
