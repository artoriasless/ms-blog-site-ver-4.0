'use strict';

const React = require('react');

const jQuery = window.jQuery || window.$;
const $ = jQuery;

class ModuleClockShow extends React.Component {
    constructor() {
        super();

        this.easing = this.easing.bind(this);
        this.roundabout2 = this.roundabout2.bind(this);
        this.roundabout_shapes = this.roundabout_shapes.bind(this);

        this.roundaboutInit = this.roundaboutInit.bind(this);
        this.roundaboutCss = this.roundaboutCss.bind(this);
    }

    easing() {
        jQuery.easing['jswing'] = jQuery.easing['swing'];

        jQuery.extend(jQuery.easing, {
            def: 'easeOutQuad',
            swing: function (x, t, b, c, d) {
                //alert(jQuery.easing.default);
                return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
            },
            easeInQuad: function (x, t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOutQuad: function (x, t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOutQuad: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t + b;
                return -c / 2 * ((--t) * (t - 2) - 1) + b;
            },
            easeInCubic: function (x, t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOutCubic: function (x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOutCubic: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            },
            easeInQuart: function (x, t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOutQuart: function (x, t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOutQuart: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            },
            easeInQuint: function (x, t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOutQuint: function (x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOutQuint: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            },
            easeInSine: function (x, t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOutSine: function (x, t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOutSine: function (x, t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            },
            easeInExpo: function (x, t, b, c, d) {
                return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOutExpo: function (x, t, b, c, d) {
                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOutExpo: function (x, t, b, c, d) {
                if (t == 0) return b;
                if (t == d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function (x, t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOutCirc: function (x, t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOutCirc: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            },
            easeInElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOutElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
            },
            easeInOutElastic: function (x, t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t == 0) return b;
                if ((t /= d / 2) == 2) return b + c;
                if (!p) p = d * (.3 * 1.5);
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            },
            easeInBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
            },
            easeInBounce: function (x, t, b, c, d) {
                return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
            },
            easeOutBounce: function (x, t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            },
            easeInOutBounce: function (x, t, b, c, d) {
                if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
                return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        });
    }

    roundabout2() {
        var defaults, internalData, methods;

        // add default shape
        $.extend({
            roundaboutShapes: {
                def: 'lazySusan',
                lazySusan: function (r, a, t) {
                    return {
                        x: Math.sin(r + a),
                        y: (Math.sin(r + 3 * Math.PI / 2 + a) / 8) * t,
                        z: (Math.cos(r + a) + 1) / 2,
                        scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                    };
                }
            }
        });

        defaults = {
            bearing: 0.0,
            tilt: 0.0,
            minZ: 100,
            maxZ: 280,
            minOpacity: 0.4,
            maxOpacity: 1.0,
            minScale: 0.4,
            maxScale: 1.0,
            duration: 600,
            btnNext: null,
            btnNextCallback: function () {},
            btnPrev: null,
            btnPrevCallback: function () {},
            btnToggleAutoplay: null,
            btnStartAutoplay: null,
            btnStopAutoplay: null,
            easing: 'swing',
            clickToFocus: true,
            clickToFocusCallback: function () {},
            focusBearing: 0.0,
            shape: 'lazySusan',
            debug: false,
            childSelector: 'li',
            startingChild: null,
            reflect: false,
            floatComparisonThreshold: 0.001,
            autoplay: false,
            autoplayDuration: 1000,
            autoplayPauseOnHover: false,
            autoplayCallback: function () {},
            enableDrag: false,
            dropDuration: 600,
            dropEasing: 'swing',
            dropAnimateTo: 'nearest',
            dropCallback: function () {},
            dragAxis: 'x',
            dragFactor: 4,
            triggerFocusEvents: true,
            triggerBlurEvents: true,
            responsive: false
        };

        internalData = {
            autoplayInterval: null,
            autoplayIsRunning: false,
            animating: false,
            childInFocus: -1,
            touchMoveStartPosition: null,
            stopAnimation: false,
            lastAnimationStep: false
        };

        methods = {

            // starters
            // -----------------------------------------------------------------------

            // init
            // starts up roundabout
            init: function (options, callback, relayout) {
                var settings,
                    now = (new Date()).getTime();

                options = (typeof options === 'object') ? options : {};
                callback = ($.isFunction(callback)) ? callback : function () {};
                callback = ($.isFunction(options)) ? options : callback;
                settings = $.extend({}, defaults, options, internalData);

                return this
                    .each(function () {
                        // make options
                        var self = $(this),
                            childCount = self.children(settings.childSelector).length,
                            period = 360.0 / childCount,
                            startingChild = (settings.startingChild && settings.startingChild > (childCount - 1)) ? (childCount - 1) : settings.startingChild,
                            startBearing = (settings.startingChild === null) ? settings.bearing : 360 - (startingChild * period),
                            holderCSSPosition = (self.css('position') !== 'static') ? self.css('position') : 'relative';

                        self
                            .css({ // starting styles
                                padding: 0,
                                position: holderCSSPosition
                            })
                            .addClass('roundabout-holder')
                            .data( // starting options
                                'roundabout',
                                $.extend({},
                                    settings, {
                                        startingChild: startingChild,
                                        bearing: startBearing,
                                        oppositeOfFocusBearing: methods.normalize.apply(null, [settings.focusBearing - 180]),
                                        dragBearing: startBearing,
                                        period: period
                                    }
                                )
                            );

                        // bind based on settings if this init call was not a relayout
                        if (!relayout) {
                            // bind click-to-focus
                            if (settings.clickToFocus) {
                                self
                                    .children(settings.childSelector)
                                    .each(function (i) {
                                        $(this)
                                            .bind('click.roundabout', function () {
                                                var degrees = methods.getPlacement.apply(self, [i]);

                                                if (!methods.isInFocus.apply(self, [degrees])) {
                                                    methods.stopAnimation.apply($(this));
                                                    if (!self.data('roundabout').animating) {
                                                        methods.animateBearingToFocus.apply(self, [degrees, self.data('roundabout').clickToFocusCallback]);
                                                    }
                                                    return false;
                                                }
                                            });
                                    });
                            }

                            // bind next buttons
                            if (settings.btnNext) {
                                $(settings.btnNext)
                                    .bind('click.roundabout', function () {
                                        if (!self.data('roundabout').animating) {
                                            methods.animateToNextChild.apply(self, [self.data('roundabout').btnNextCallback]);
                                        }
                                        return false;
                                    });
                            }

                            // bind previous buttons
                            if (settings.btnPrev) {
                                $(settings.btnPrev)
                                    .bind('click.roundabout', function () {
                                        methods.animateToPreviousChild.apply(self, [self.data('roundabout').btnPrevCallback]);
                                        return false;
                                    });
                            }

                            // bind toggle autoplay buttons
                            if (settings.btnToggleAutoplay) {
                                $(settings.btnToggleAutoplay)
                                    .bind('click.roundabout', function () {
                                        methods.toggleAutoplay.apply(self);
                                        return false;
                                    });
                            }

                            // bind start autoplay buttons
                            if (settings.btnStartAutoplay) {
                                $(settings.btnStartAutoplay)
                                    .bind('click.roundabout', function () {
                                        methods.startAutoplay.apply(self);
                                        return false;
                                    });
                            }

                            // bind stop autoplay buttons
                            if (settings.btnStopAutoplay) {
                                $(settings.btnStopAutoplay)
                                    .bind('click.roundabout', function () {
                                        methods.stopAutoplay.apply(self);
                                        return false;
                                    });
                            }

                            // autoplay pause on hover
                            if (settings.autoplayPauseOnHover) {
                                self
                                    .bind('mouseenter.roundabout.autoplay', function () {
                                        methods.stopAutoplay.apply(self, [true]);
                                    })
                                    .bind('mouseleave.roundabout.autoplay', function () {
                                        methods.startAutoplay.apply(self);
                                    });
                            }

                            // drag and drop
                            if (settings.enableDrag) {
                                // on screen
                                if (!$.isFunction(self.drag)) {
                                    if (settings.debug) {
                                        alert('You do not have the drag plugin loaded.');
                                    }
                                } else if (!$.isFunction(self.drop)) {
                                    if (settings.debug) {
                                        alert('You do not have the drop plugin loaded.');
                                    }
                                } else {
                                    self
                                        .drag(function (e, properties) {
                                            var data = self.data('roundabout'),
                                                delta = (data.dragAxis.toLowerCase() === 'x') ? 'deltaX' : 'deltaY';
                                            methods.stopAnimation.apply(self);
                                            methods.setBearing.apply(self, [data.dragBearing + properties[delta] / data.dragFactor]);
                                        })
                                        .drop(function (e) {
                                            var data = self.data('roundabout'),
                                                method = methods.getAnimateToMethod(data.dropAnimateTo);
                                            methods.allowAnimation.apply(self);
                                            methods[method].apply(self, [data.dropDuration, data.dropEasing, data.dropCallback]);
                                            data.dragBearing = data.period * methods.getNearestChild.apply(self);
                                        });
                                }

                                // on mobile
                                self
                                    .each(function () {
                                        var element = $(this).get(0),
                                            data = $(this).data('roundabout'),
                                            page = (data.dragAxis.toLowerCase() === 'x') ? 'pageX' : 'pageY',
                                            method = methods.getAnimateToMethod(data.dropAnimateTo);

                                        // some versions of IE don't like this
                                        if (element.addEventListener) {
                                            element.addEventListener('touchstart', function (e) {
                                                data.touchMoveStartPosition = e.touches[0][page];
                                            }, false);

                                            element.addEventListener('touchmove', function (e) {
                                                var delta = (e.touches[0][page] - data.touchMoveStartPosition) / data.dragFactor;
                                                e.preventDefault();
                                                methods.stopAnimation.apply($(this));
                                                methods.setBearing.apply($(this), [data.dragBearing + delta]);
                                            }, false);

                                            element.addEventListener('touchend', function (e) {
                                                e.preventDefault();
                                                methods.allowAnimation.apply($(this));
                                                method = methods.getAnimateToMethod(data.dropAnimateTo);
                                                methods[method].apply($(this), [data.dropDuration, data.dropEasing, data.dropCallback]);
                                                data.dragBearing = data.period * methods.getNearestChild.apply($(this));
                                            }, false);
                                        }
                                    });
                            }

                            // responsive
                            if (settings.responsive) {
                                $(window).resize(function () {
                                    methods.relayoutChildren.apply(self);
                                });
                            }
                        }

                        // start children
                        methods.initChildren.apply(self, [callback, relayout]);
                    });
            },


            // initChildren
            // applys settings to child elements, starts roundabout
            initChildren: function (callback, relayout) {
                var self = $(this),
                    data = self.data('roundabout');

                callback = callback || function () {};

                self.children(data.childSelector).each(function (i) {
                    var startWidth, startHeight, startFontSize,
                        degrees = methods.getPlacement.apply(self, [i]);

                    // on relayout, grab these values from current data
                    if (relayout) {
                        startWidth = $(this).data('roundabout').startWidth;
                        startHeight = $(this).data('roundabout').startHeight;
                        startFontSize = $(this).data('roundabout').startFontSize;
                    }

                    // apply classes and css first
                    $(this)
                        .addClass('roundabout-moveable-item')
                        .css('position', 'absolute');

                    // now measure
                    $(this)
                        .data(
                            'roundabout', {
                                startWidth: startWidth || $(this).width(),
                                startHeight: startHeight || $(this).height(),
                                startFontSize: startFontSize || parseInt($(this).css('font-size'), 10),
                                degrees: degrees,
                                backDegrees: methods.normalize.apply(null, [degrees - 180]),
                                childNumber: i,
                                currentScale: 1,
                                parent: self
                            }
                        );
                });

                methods.updateChildren.apply(self);

                // start autoplay if necessary
                if (data.autoplay) {
                    methods.startAutoplay.apply(self);
                }

                self.trigger('ready');
                callback.apply(self);
                return self;
            },



            // positioning
            // -----------------------------------------------------------------------

            // updateChildren
            // move children elements into their proper locations
            updateChildren: function () {
                return this
                    .each(function () {
                        var self = $(this),
                            data = self.data('roundabout'),
                            inFocus = -1,
                            info = {
                                bearing: data.bearing,
                                tilt: data.tilt,
                                stage: {
                                    width: Math.floor($(this).width() * 0.9),
                                    height: Math.floor($(this).height() * 0.9)
                                },
                                animating: data.animating,
                                inFocus: data.childInFocus,
                                focusBearingRadian: methods.degToRad.apply(null, [data.focusBearing]),
                                shape: $.roundaboutShapes[data.shape] || $.roundaboutShapes[$.roundaboutShapes.def]
                            };

                        // calculations
                        info.midStage = {
                            width: info.stage.width / 2,
                            height: info.stage.height / 2
                        };

                        info.nudge = {
                            width: info.midStage.width + (info.stage.width * 0.05),
                            height: info.midStage.height + (info.stage.height * 0.05)
                        };

                        info.zValues = {
                            min: data.minZ,
                            max: data.maxZ,
                            diff: data.maxZ - data.minZ
                        };

                        info.opacity = {
                            min: data.minOpacity,
                            max: data.maxOpacity,
                            diff: data.maxOpacity - data.minOpacity
                        };

                        info.scale = {
                            min: data.minScale,
                            max: data.maxScale,
                            diff: data.maxScale - data.minScale
                        };

                        // update child positions
                        self.children(data.childSelector)
                            .each(function (i) {
                                if (methods.updateChild.apply(self, [$(this), info, i, function () {
                                        $(this).trigger('ready');
                                    }]) && (!info.animating || data.lastAnimationStep)) {
                                    inFocus = i;
                                    $(this).addClass('roundabout-in-focus');
                                } else {
                                    $(this).removeClass('roundabout-in-focus');
                                }
                            });

                        if (inFocus !== info.inFocus) {
                            // blur old child
                            if (data.triggerBlurEvents) {
                                self.children(data.childSelector)
                                    .eq(info.inFocus)
                                    .trigger('blur');
                            }

                            data.childInFocus = inFocus;

                            if (data.triggerFocusEvents && inFocus !== -1) {
                                // focus new child
                                self.children(data.childSelector)
                                    .eq(inFocus)
                                    .trigger('focus');
                            }
                        }

                        self.trigger('childrenUpdated');
                    });
            },


            // updateChild
            // repositions a child element into its new position
            updateChild: function (childElement, info, childPos, callback) {
                var factors,
                    self = this,
                    child = $(childElement),
                    data = child.data('roundabout'),
                    out = [],
                    rad = methods.degToRad.apply(null, [(360.0 - data.degrees) + info.bearing]);

                callback = callback || function () {};

                // adjust radians to be between 0 and Math.PI * 2
                rad = methods.normalizeRad.apply(null, [rad]);

                // get factors from shape
                factors = info.shape(rad, info.focusBearingRadian, info.tilt);

                // correct
                factors.scale = (factors.scale > 1) ? 1 : factors.scale;
                factors.adjustedScale = (info.scale.min + (info.scale.diff * factors.scale)).toFixed(4);
                factors.width = (factors.adjustedScale * data.startWidth).toFixed(4);
                factors.height = (factors.adjustedScale * data.startHeight).toFixed(4);

                // update item
                child
                    .css({
                        left: ((factors.x * info.midStage.width + info.nudge.width) - factors.width / 2.0).toFixed(0) + 'px',
                        top: ((factors.y * info.midStage.height + info.nudge.height) - factors.height / 2.0).toFixed(0) + 'px',
                        width: factors.width + 'px',
                        height: factors.height + 'px',
                        opacity: (info.opacity.min + (info.opacity.diff * factors.scale)).toFixed(2),
                        zIndex: Math.round(info.zValues.min + (info.zValues.diff * factors.z)),
                        fontSize: (factors.adjustedScale * data.startFontSize).toFixed(1) + 'px'
                    });
                data.currentScale = factors.adjustedScale;

                // for debugging purposes
                if (self.data('roundabout').debug) {
                    out.push('<div style=\'font-weight: normal; font-size: 10px; padding: 2px; width: ' + child.css('width') + '; background-color: #ffc;\'>');
                    out.push('<strong style=\'font-size: 12px; white-space: nowrap;\'>Child ' + childPos + '</strong><br />');
                    out.push('<strong>left:</strong> ' + child.css('left') + '<br />');
                    out.push('<strong>top:</strong> ' + child.css('top') + '<br />');
                    out.push('<strong>width:</strong> ' + child.css('width') + '<br />');
                    out.push('<strong>opacity:</strong> ' + child.css('opacity') + '<br />');
                    out.push('<strong>height:</strong> ' + child.css('height') + '<br />');
                    out.push('<strong>z-index:</strong> ' + child.css('z-index') + '<br />');
                    out.push('<strong>font-size:</strong> ' + child.css('font-size') + '<br />');
                    out.push('<strong>scale:</strong> ' + child.data('roundabout').currentScale);
                    out.push('</div>');

                    child.html(out.join(''));
                }

                // trigger event
                child.trigger('reposition');

                // callback
                callback.apply(self);

                return methods.isInFocus.apply(self, [data.degrees]);
            },



            // manipulation
            // -----------------------------------------------------------------------

            // setBearing
            // changes the bearing of the roundabout
            setBearing: function (bearing, callback) {
                callback = callback || function () {};
                bearing = methods.normalize.apply(null, [bearing]);

                this
                    .each(function () {
                        var diff, lowerValue, higherValue,
                            self = $(this),
                            data = self.data('roundabout'),
                            oldBearing = data.bearing;

                        // set bearing
                        data.bearing = bearing;
                        self.trigger('bearingSet');
                        methods.updateChildren.apply(self);

                        // not animating? we're done here
                        diff = Math.abs(oldBearing - bearing);
                        if (!data.animating || diff > 180) {
                            return;
                        }

                        // check to see if any of the children went through the back
                        diff = Math.abs(oldBearing - bearing);
                        self.children(data.childSelector).each(function (i) {
                            var eventType;

                            if (methods.isChildBackDegreesBetween.apply($(this), [bearing, oldBearing])) {
                                eventType = (oldBearing > bearing) ? 'Clockwise' : 'Counterclockwise';
                                $(this).trigger('move' + eventType + 'ThroughBack');
                            }
                        });
                    });

                // call callback if one was given
                callback.apply(this);
                return this;
            },


            // adjustBearing
            // change the bearing of the roundabout by a given degree
            adjustBearing: function (delta, callback) {
                callback = callback || function () {};
                if (delta === 0) {
                    return this;
                }

                this
                    .each(function () {
                        methods.setBearing.apply($(this), [$(this).data('roundabout').bearing + delta]);
                    });

                callback.apply(this);
                return this;
            },


            // setTilt
            // changes the tilt of the roundabout
            setTilt: function (tilt, callback) {
                callback = callback || function () {};

                this
                    .each(function () {
                        $(this).data('roundabout').tilt = tilt;
                        methods.updateChildren.apply($(this));
                    });

                // call callback if one was given
                callback.apply(this);
                return this;
            },


            // adjustTilt
            // changes the tilt of the roundabout
            adjustTilt: function (delta, callback) {
                callback = callback || function () {};

                this
                    .each(function () {
                        methods.setTilt.apply($(this), [$(this).data('roundabout').tilt + delta]);
                    });

                callback.apply(this);
                return this;
            },



            // animation
            // -----------------------------------------------------------------------

            // animateToBearing
            // animates the roundabout to a given bearing, all animations come through here
            animateToBearing: function (bearing, duration, easing, passedData, callback) {
                var now = (new Date()).getTime();

                callback = callback || function () {};

                // find callback function in arguments
                if ($.isFunction(passedData)) {
                    callback = passedData;
                    passedData = null;
                } else if ($.isFunction(easing)) {
                    callback = easing;
                    easing = null;
                } else if ($.isFunction(duration)) {
                    callback = duration;
                    duration = null;
                }

                this
                    .each(function () {
                        var timer, easingFn, newBearing,
                            self = $(this),
                            data = self.data('roundabout'),
                            thisDuration = (!duration) ? data.duration : duration,
                            thisEasingType = (easing) ? easing : data.easing || 'swing';

                        // is this your first time?
                        if (!passedData) {
                            passedData = {
                                timerStart: now,
                                start: data.bearing,
                                totalTime: thisDuration
                            };
                        }

                        // update the timer
                        timer = now - passedData.timerStart;

                        if (data.stopAnimation) {
                            methods.allowAnimation.apply(self);
                            data.animating = false;
                            return;
                        }

                        // we need to animate more
                        if (timer < thisDuration) {
                            if (!data.animating) {
                                self.trigger('animationStart');
                            }

                            data.animating = true;

                            if (typeof $.easing.def === 'string') {
                                easingFn = $.easing[thisEasingType] || $.easing[$.easing.def];
                                newBearing = easingFn(null, timer, passedData.start, bearing - passedData.start, passedData.totalTime);
                            } else {
                                newBearing = $.easing[thisEasingType]((timer / passedData.totalTime), timer, passedData.start, bearing - passedData.start, passedData.totalTime);
                            }

                            newBearing = methods.normalize.apply(null, [newBearing]);
                            data.dragBearing = newBearing;

                            methods.setBearing.apply(self, [newBearing, function () {
                                setTimeout(function () { // done with a timeout so that each step is displayed
                                    methods.animateToBearing.apply(self, [bearing, thisDuration, thisEasingType, passedData, callback]);
                                }, 0);
                            }]);

                            // we're done animating
                        } else {
                            if (data.animating) {
                                self.trigger('animationEnd');
                            }

                            data.lastAnimationStep = true;

                            bearing = methods.normalize.apply(null, [bearing]);
                            methods.setBearing.apply(self, [bearing]);
                            data.animating = false;
                            data.lastAnimationStep = false;
                            data.dragBearing = bearing;

                            callback.apply(self);
                        }
                    });

                return this;
            },


            // animateToNearbyChild
            // animates roundabout to a nearby child
            animateToNearbyChild: function (passedArgs, which) {
                var duration = passedArgs[0],
                    easing = passedArgs[1],
                    callback = passedArgs[2] || function () {};

                // find callback
                if ($.isFunction(easing)) {
                    callback = easing;
                    easing = null;
                } else if ($.isFunction(duration)) {
                    callback = duration;
                    duration = null;
                }

                return this
                    .each(function () {
                        var j, range,
                            self = $(this),
                            data = self.data('roundabout'),
                            bearing = (!data.reflect) ? data.bearing % 360 : data.bearing,
                            length = self.children(data.childSelector).length;

                        if (!data.animating) {
                            // reflecting, not moving to previous || not reflecting, moving to next
                            if ((data.reflect && which === 'previous') || (!data.reflect && which === 'next')) {
                                // slightly adjust for rounding issues
                                bearing = (Math.abs(bearing) < data.floatComparisonThreshold) ? 360 : bearing;

                                // clockwise
                                for (j = 0; j < length; j += 1) {
                                    range = {
                                        lower: (data.period * j),
                                        upper: (data.period * (j + 1))
                                    };
                                    range.upper = (j === length - 1) ? 360 : range.upper;

                                    if (bearing <= Math.ceil(range.upper) && bearing >= Math.floor(range.lower)) {
                                        if (length === 2 && bearing === 360) {
                                            methods.animateToDelta.apply(self, [-180, duration, easing, callback]);
                                        } else {
                                            methods.animateBearingToFocus.apply(self, [range.lower, duration, easing, callback]);
                                        }
                                        break;
                                    }
                                }
                            } else {
                                // slightly adjust for rounding issues
                                bearing = (Math.abs(bearing) < data.floatComparisonThreshold || 360 - Math.abs(bearing) < data.floatComparisonThreshold) ? 0 : bearing;

                                // counterclockwise
                                for (j = length - 1; j >= 0; j -= 1) {
                                    range = {
                                        lower: data.period * j,
                                        upper: data.period * (j + 1)
                                    };
                                    range.upper = (j === length - 1) ? 360 : range.upper;

                                    if (bearing >= Math.floor(range.lower) && bearing < Math.ceil(range.upper)) {
                                        if (length === 2 && bearing === 360) {
                                            methods.animateToDelta.apply(self, [180, duration, easing, callback]);
                                        } else {
                                            methods.animateBearingToFocus.apply(self, [range.upper, duration, easing, callback]);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    });
            },


            // animateToNearestChild
            // animates roundabout to the nearest child
            animateToNearestChild: function (duration, easing, callback) {
                callback = callback || function () {};

                // find callback
                if ($.isFunction(easing)) {
                    callback = easing;
                    easing = null;
                } else if ($.isFunction(duration)) {
                    callback = duration;
                    duration = null;
                }

                return this
                    .each(function () {
                        var nearest = methods.getNearestChild.apply($(this));
                        methods.animateToChild.apply($(this), [nearest, duration, easing, callback]);
                    });
            },


            // animateToChild
            // animates roundabout to a given child position
            animateToChild: function (childPosition, duration, easing, callback) {
                callback = callback || function () {};

                // find callback
                if ($.isFunction(easing)) {
                    callback = easing;
                    easing = null;
                } else if ($.isFunction(duration)) {
                    callback = duration;
                    duration = null;
                }

                return this
                    .each(function () {
                        var child,
                            self = $(this),
                            data = self.data('roundabout');

                        if (data.childInFocus !== childPosition && !data.animating) {
                            child = self.children(data.childSelector).eq(childPosition);
                            methods.animateBearingToFocus.apply(self, [child.data('roundabout').degrees, duration, easing, callback]);
                        }
                    });
            },


            // animateToNextChild
            // animates roundabout to the next child
            animateToNextChild: function (duration, easing, callback) {
                return methods.animateToNearbyChild.apply(this, [arguments, 'next']);
            },


            // animateToPreviousChild
            // animates roundabout to the preious child
            animateToPreviousChild: function (duration, easing, callback) {
                return methods.animateToNearbyChild.apply(this, [arguments, 'previous']);
            },


            // animateToDelta
            // animates roundabout to a given delta (in degrees)
            animateToDelta: function (degrees, duration, easing, callback) {
                callback = callback || function () {};

                // find callback
                if ($.isFunction(easing)) {
                    callback = easing;
                    easing = null;
                } else if ($.isFunction(duration)) {
                    callback = duration;
                    duration = null;
                }

                return this
                    .each(function () {
                        var delta = $(this).data('roundabout').bearing + degrees;
                        methods.animateToBearing.apply($(this), [delta, duration, easing, callback]);
                    });
            },


            // animateBearingToFocus
            // animates roundabout to bring a given angle into focus
            animateBearingToFocus: function (degrees, duration, easing, callback) {
                callback = callback || function () {};

                // find callback
                if ($.isFunction(easing)) {
                    callback = easing;
                    easing = null;
                } else if ($.isFunction(duration)) {
                    callback = duration;
                    duration = null;
                }

                return this
                    .each(function () {
                        var delta = $(this).data('roundabout').bearing - degrees;
                        delta = (Math.abs(360 - delta) < Math.abs(delta)) ? 360 - delta : -delta;
                        delta = (delta > 180) ? -(360 - delta) : delta;

                        if (delta !== 0) {
                            methods.animateToDelta.apply($(this), [delta, duration, easing, callback]);
                        }
                    });
            },


            // stopAnimation
            // if an animation is currently in progress, stop it
            stopAnimation: function () {
                return this
                    .each(function () {
                        $(this).data('roundabout').stopAnimation = true;
                    });
            },


            // allowAnimation
            // clears the stop-animation hold placed by stopAnimation
            allowAnimation: function () {
                return this
                    .each(function () {
                        $(this).data('roundabout').stopAnimation = false;
                    });
            },



            // autoplay
            // -----------------------------------------------------------------------

            // startAutoplay
            // starts autoplaying this roundabout
            startAutoplay: function (callback) {
                return this
                    .each(function () {
                        var self = $(this),
                            data = self.data('roundabout');

                        callback = callback || data.autoplayCallback || function () {};

                        clearInterval(data.autoplayInterval);
                        data.autoplayInterval = setInterval(function () {
                            methods.animateToNextChild.apply(self, [callback]);
                        }, data.autoplayDuration);
                        data.autoplayIsRunning = true;

                        self.trigger('autoplayStart');
                    });
            },


            // stopAutoplay
            // stops autoplaying this roundabout
            stopAutoplay: function (keepAutoplayBindings) {
                return this
                    .each(function () {
                        clearInterval($(this).data('roundabout').autoplayInterval);
                        $(this).data('roundabout').autoplayInterval = null;
                        $(this).data('roundabout').autoplayIsRunning = false;

                        // this will prevent autoplayPauseOnHover from restarting autoplay
                        if (!keepAutoplayBindings) {
                            $(this).unbind('.autoplay')
                        }

                        $(this).trigger('autoplayStop');
                    });
            },


            // toggleAutoplay
            // toggles autoplay pause/resume
            toggleAutoplay: function (callback) {
                return this
                    .each(function () {
                        var self = $(this),
                            data = self.data('roundabout');

                        callback = callback || data.autoplayCallback || function () {};

                        if (!methods.isAutoplaying.apply($(this))) {
                            methods.startAutoplay.apply($(this), [callback]);
                        } else {
                            methods.stopAutoplay.apply($(this), [callback]);
                        }
                    });
            },


            // isAutoplaying
            // is this roundabout currently autoplaying?
            isAutoplaying: function () {
                return (this.data('roundabout').autoplayIsRunning);
            },


            // changeAutoplayDuration
            // stops the autoplay, changes the duration, restarts autoplay
            changeAutoplayDuration: function (duration) {
                return this
                    .each(function () {
                        var self = $(this),
                            data = self.data('roundabout');

                        data.autoplayDuration = duration;

                        if (methods.isAutoplaying.apply(self)) {
                            methods.stopAutoplay.apply(self);
                            setTimeout(function () {
                                methods.startAutoplay.apply(self);
                            }, 10);
                        }
                    });
            },



            // helpers
            // -----------------------------------------------------------------------

            // normalize
            // regulates degrees to be >= 0.0 and < 360
            normalize: function (degrees) {
                var inRange = degrees % 360.0;
                return (inRange < 0) ? 360 + inRange : inRange;
            },


            // normalizeRad
            // regulates radians to be >= 0 and < Math.PI * 2
            normalizeRad: function (radians) {
                while (radians < 0) {
                    radians += (Math.PI * 2);
                }

                while (radians > (Math.PI * 2)) {
                    radians -= (Math.PI * 2);
                }

                return radians;
            },


            // isChildBackDegreesBetween
            // checks that a given child's backDegrees is between two values
            isChildBackDegreesBetween: function (value1, value2) {
                var backDegrees = $(this).data('roundabout').backDegrees;

                if (value1 > value2) {
                    return (backDegrees >= value2 && backDegrees < value1);
                } else {
                    return (backDegrees < value2 && backDegrees >= value1);
                }
            },


            // getAnimateToMethod
            // takes a user-entered option and maps it to an animation method
            getAnimateToMethod: function (effect) {
                effect = effect.toLowerCase();

                if (effect === 'next') {
                    return 'animateToNextChild';
                } else if (effect === 'previous') {
                    return 'animateToPreviousChild';
                }

                // default selection
                return 'animateToNearestChild';
            },


            // relayoutChildren
            // lays out children again with new contextual information
            relayoutChildren: function () {
                return this
                    .each(function () {
                        var self = $(this),
                            settings = $.extend({}, self.data('roundabout'));

                        settings.startingChild = self.data('roundabout').childInFocus;
                        methods.init.apply(self, [settings, null, true]);
                    });
            },


            // getNearestChild
            // gets the nearest child from the current bearing
            getNearestChild: function () {
                var self = $(this),
                    data = self.data('roundabout'),
                    length = self.children(data.childSelector).length;

                if (!data.reflect) {
                    return ((length) - (Math.round(data.bearing / data.period) % length)) % length;
                } else {
                    return (Math.round(data.bearing / data.period) % length);
                }
            },


            // degToRad
            // converts degrees to radians
            degToRad: function (degrees) {
                return methods.normalize.apply(null, [degrees]) * Math.PI / 180.0;
            },


            // getPlacement
            // returns the starting degree for a given child
            getPlacement: function (child) {
                var data = this.data('roundabout');
                return (!data.reflect) ? 360.0 - (data.period * child) : data.period * child;
            },


            // isInFocus
            // is this roundabout currently in focus?
            isInFocus: function (degrees) {
                var diff,
                    self = this,
                    data = self.data('roundabout'),
                    bearing = methods.normalize.apply(null, [data.bearing]);

                degrees = methods.normalize.apply(null, [degrees]);
                diff = Math.abs(bearing - degrees);

                // this calculation gives a bit of room for javascript float rounding
                // errors, it looks on both 0deg and 360deg ends of the spectrum
                return (diff <= data.floatComparisonThreshold || diff >= 360 - data.floatComparisonThreshold);
            }
        };


        // start the plugin
        $.fn.roundabout = function (method) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || $.isFunction(method) || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist for jQuery.roundabout.');
            }
        };
    }

    roundabout_shapes() {
        jQuery.extend(jQuery.roundaboutShapes, {
            theJuggler: function (r, a, t) {
                return {
                    x: Math.sin(r + a),
                    y: Math.tan(Math.exp(Math.log(r)) + a) / (t - 1),
                    z: (Math.cos(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            figure8: function (r, a, t) {
                return {
                    x: Math.sin(r * 2 + a),
                    y: (Math.sin(r + Math.PI / 2 + a) / 8) * t,
                    z: (Math.cos(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            waterWheel: function (r, a, t) {
                return {
                    x: (Math.sin(r + Math.PI / 2 + a) / 8) * t,
                    y: Math.sin(r + a) / (Math.PI / 2),
                    z: (Math.cos(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            square: function (r, a, t) {
                var sq_x, sq_y, sq_z;

                if (r <= Math.PI / 2) {
                    sq_x = (2 / Math.PI) * r;
                    sq_y = -(2 / Math.PI) * r + 1;
                    sq_z = -(1 / Math.PI) * r + 1;
                } else if (r > Math.PI / 2 && r <= Math.PI) {
                    sq_x = -(2 / Math.PI) * r + 2;
                    sq_y = -(2 / Math.PI) * r + 1;
                    sq_z = -(1 / Math.PI) * r + 1;
                } else if (r > Math.PI && r <= (3 * Math.PI) / 2) {
                    sq_x = -(2 / Math.PI) * r + 2;
                    sq_y = (2 / Math.PI) * r - 3;
                    sq_z = (1 / Math.PI) * r - 1;
                } else {
                    sq_x = (2 / Math.PI) * r - 4;
                    sq_y = (2 / Math.PI) * r - 3;
                    sq_z = (1 / Math.PI) * r - 1;
                }

                return {
                    x: sq_x,
                    y: sq_y * t,
                    z: sq_z,
                    scale: sq_z
                };
            },
            conveyorBeltLeft: function (r, a, t) {
                return {
                    x: -Math.cos(r + a),
                    y: (Math.cos(r + 3 * Math.PI / 2 + a) / 8) * t,
                    z: (Math.sin(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            conveyorBeltRight: function (r, a, t) {
                return {
                    x: Math.cos(r + a),
                    y: (Math.cos(r + 3 * Math.PI / 2 + a) / 8) * t,
                    z: (Math.sin(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            goodbyeCruelWorld: function (r, a, t) {
                return {
                    x: Math.sin(r + a),
                    y: (Math.tan(r + 3 * Math.PI / 2 + a) / 8) * (t + 0.5),
                    z: (Math.sin(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            diagonalRingLeft: function (r, a, t) {
                return {
                    x: Math.sin(r + a),
                    y: -Math.cos(r + Math.tan(Math.cos(a))) / (t + 1.5),
                    z: (Math.cos(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            diagonalRingRight: function (r, a, t) {
                return {
                    x: Math.sin(r + a),
                    y: Math.cos(r + Math.tan(Math.cos(a))) / (t + 1.5),
                    z: (Math.cos(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            rollerCoaster: function (r, a, t) {
                return {
                    x: Math.sin(r + a),
                    y: Math.sin((2 + t) * r),
                    z: (Math.cos(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            tearDrop: function (r, a, t) {
                return {
                    x: Math.sin(r + a),
                    y: -Math.sin(r / 2 + t) + 0.35,
                    z: (Math.cos(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            tickingClock: function (r, a, t) {
                return {
                    x: Math.cos(r + a - Math.PI / 2),
                    y: Math.sin(r + a - Math.PI / 2),
                    z: Math.cos(r),
                    scale: Math.cos(r) + 0.5
                }
            },
            flurry: function (r, a, t) {
                return {
                    x: Math.sin(r * 3 + a),
                    y: (Math.cos(r + Math.PI / 2 + a) / 2) * t,
                    z: (Math.cos(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            nowSlide: function (r, a, t) {
                return {
                    x: Math.tan(r * 2 + a) * 0.5,
                    y: Math.cos(r * 2 + t) / 6,
                    z: (Math.cos(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            },
            risingEssence: function (r, a, t) {
                return {
                    x: Math.sin(r + a),
                    y: Math.tan((2 + t) * r),
                    z: (Math.cos(r + a) + 1) / 2,
                    scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
                };
            }
        });
    }

    roundaboutInit() {
        function getDateBreakdown() {
            var date = new Date(),
                breakdown = {};
            breakdown.hoursTens = (date.getHours() === 0 || date.getHours() == 23 || date.getHours() == 22 || date.getHours() == 11 || date.getHours() == 12 || date.getHours() == 10) ? 1 : 0;
            breakdown.hoursOnes = (date.getHours() === 0 || date.getHours() > 12) ? Math.abs(date.getHours() - 12) % 10 : date.getHours() % 10;
            breakdown.minutesTens = (date.getMinutes() - (date.getMinutes() % 10)) / 10;
            breakdown.minutesOnes = date.getMinutes() % 10;
            breakdown.secondsTens = (date.getSeconds() - (date.getSeconds() % 10)) / 10;
            breakdown.secondsOnes = date.getSeconds() % 10;
            breakdown.ampm = (date.getHours() > 11) ? 1 : 0;
            return breakdown;
        }

        var breakdown = getDateBreakdown();

        $('ul#hours-tens').roundabout({
            easing: 'easeOutExpo',
            shape: 'waterWheel',
            startingChild: breakdown.hoursTens,
            minScale: 1
        });
        $('ul#hours-ones').roundabout({
            easing: 'easeOutExpo',
            shape: 'waterWheel',
            startingChild: breakdown.hoursOnes,
            minScale: 1
        });
        $('ul#minutes-tens').roundabout({
            easing: 'easeOutExpo',
            shape: 'waterWheel',
            startingChild: breakdown.minutesTens,
            minScale: 1
        });
        $('ul#minutes-ones').roundabout({
            easing: 'easeOutExpo',
            shape: 'waterWheel',
            startingChild: breakdown.minutesOnes,
            minScale: 1
        });
        $('ul#seconds-tens').roundabout({
            easing: 'easeOutExpo',
            shape: 'waterWheel',
            startingChild: breakdown.secondsTens,
            minScale: 1
        });
        $('ul#seconds-ones').roundabout({
            easing: 'easeOutExpo',
            shape: 'waterWheel',
            startingChild: breakdown.secondsOnes,
            minScale: 1
        });
        $('ul#ampm').roundabout({
            easing: 'easeOutExpo',
            shape: 'waterWheel',
            startingChild: breakdown.ampm
        });
        $('ul.delimiter').roundabout({
            easing: 'easeOutExpo',
            shape: 'waterWheel'
        });

        setInterval(function () {
            var breakdown = getDateBreakdown();
            $('ul#hours-tens').roundabout('animateToChild', breakdown.hoursTens);
            $('ul#hours-ones').roundabout('animateToChild', breakdown.hoursOnes);
            $('ul#minutes-tens').roundabout('animateToChild', breakdown.minutesTens);
            $('ul#minutes-ones').roundabout('animateToChild', breakdown.minutesOnes);
            $('ul#seconds-tens').roundabout('animateToChild', breakdown.secondsTens);
            $('ul#seconds-ones').roundabout('animateToChild', breakdown.secondsOnes);
            $('ul#ampm').roundabout('animateToChild', breakdown.ampm);
        }, 1000);
    }

    roundaboutCss() {
        const timeBlock = {
            padding: '0.125em 0',
            borderRadius: '15px',
            overflow: 'hidden',
            backgroundColor: '#fff',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            fontSize: '16px'
        };
        const crappy_plastic_part_made_in_china = {
            width: '185px',
            height: '0.75em',
            margin: '0 auto',
            overflow: 'hidden',
            fontSize: '3em'
        };
        const pad = {
            width: '6em',
            margin: '0 auto',
            backgroundColor: '#fff',
            backgroundPosition: 'center center'
        };
        const pad__ul = {
            width: '0.75em',
            height: '6em',
            padding: '0',
            margin: '-2.6em -21px 0 0',
            listStyle: 'none',
            float: 'left'
        };
        const pad__li = {
            width: '0.6em',
            height: '1em',
            lineHeight: '1.2',
            fontFamily: 'consola,"microsoft yahei"',
            fontSize: '0.6em',
            color: '#888',
            textAlign: 'center',
            backgroundColor: '#fff',
            backgroundPosition: 'center center',
            cursor: 'pointer'
        };
        const pad__liANDroundabout_in_focus = {
            cursor: 'default'
        };
        const ampm = {
            width: '1.8em',
            marginLeft: '-0.1em',
            opacity: '0.75'
        };
        const ampm__li = {
            width: '1.8em'
        };
        const delimiter = {
            width: '0.5em',
            textAlign: 'center',
            marginLeft: '6px',
            marginRight: '-12px'
        };
        const delimiter__li = {
            width: '0.5em',
            textAlign: 'center'
        };
        const pad__li__span = {
            display: 'block',
            paddingTop: '6em'
        };

        $('#timeBlock').css(timeBlock);
        $('.crappy-plastic-part-made-in-china').css(crappy_plastic_part_made_in_china);
        $('.pad').css(pad);
        $('.pad ul').css(pad__ul);
        $('.pad li').css(pad__li);
        $('.pad li.roundabout-in-focus').css(pad__liANDroundabout_in_focus);
        $('#ampm').css(ampm);
        $('#ampm li').css(ampm__li);
        $('.delimiter').css(delimiter);
        $('.delimiter li').css(delimiter__li);
        $('.pad li span').css(pad__li__span);
    }

    componentWillMount() {
        this.easing();
        this.roundabout2();
        this.roundabout_shapes();
    }

    componentDidMount() {
        this.roundaboutCss();
        this.roundaboutInit();
    }

    render() {
        return (
            <div id="timeBlock">
                <div className="crappy-plastic-part-made-in-china">
                    <div className="pad">
                        <ul id="hours-tens">
                            <li>&nbsp;</li>
                            <li>1</li>
                        </ul>
                        <ul id="hours-ones">
                            <li>0</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
                        </ul>
                        <ul className="delimiter">
                            <li>:</li>
                        </ul>
                        <ul id="minutes-tens">
                            <li>0</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                        <ul id="minutes-ones">
                            <li>0</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
                        </ul>
                        <ul className="delimiter">
                            <li>.</li>
                        </ul>
                        <ul id="seconds-tens">
                            <li>0</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                        <ul id="seconds-ones">
                            <li>0</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
                        </ul>
                        <ul id="ampm">
                            <li>am</li>
                            <li>pm</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}

module.exports = ModuleClockShow;