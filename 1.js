
                var countdown = $("#countdown").countdown360({
                    radius: 60,
                    seconds: 1000,
                    fontColor: '#EDEDED',
                    autostart: false,
                    onComplete: function () { window.location.href = "http://www.mediafire.com/file/7kfgx3chexjb2tu/Fouad.Whats.V7.51_By_FouadMODS.apk"; }
                });
                countdown.start();
                console.log(countdown360, countdown);
                $(document).on("click", "button", function (e) {
                    e.preventDefault();
                    var type = $(this).attr("data-type");
                    if (type === "time-remaining") {
                        var timeRemaining = countdown.getTimeRemaining();
                        alert(timeRemaining);
                    }
                    else {
                        var timeElapsed = countdown.getElapsedTime();
                        alert(timeElapsed);
                    }
                });
