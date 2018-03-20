var Hello = React.createClass({

    getOffset: function (element) {
        var bounding = element.getBoundingClientRect();
        return {
            top: bounding.top + document.body.scrollTop,
            left: bounding.left + document.body.scrollLeft
        };
    },

    handleScroll: function () {
        navbar = React.findDOMNode(this.refs.navbar);
        startElement = React.findDOMNode(this.refs.sec2);
        offset = this.getOffset(startElement)
        windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop >= offset.top) {
            navbar.classList.add("navbar-fixed-top");
        } else {
            navbar.classList.remove("navbar-fixed-top");
        }
    },

    componentDidMount: function () {
        window.addEventListener('scroll', this.handleScroll);
    },

    componentWillUnmount: function () {
        window.removeEventListener('scroll', this.handleScroll);
    },

    render: function () {
        return <div>
            <div className="navbar navbar-default" ref="navbar" id="navbar" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Project name</a>
                    </div>
                </div>
            </div>
            <section id="sec1"></section>
            <section id="sec2" ref="sec2"></section>
            <section id="sec3"></section>
        </div>;
    }
});

React.render(<Hello />, document.getElementById('container'));