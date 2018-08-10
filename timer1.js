
<center>

            <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js" type="text/javascript"></script>
        <script src="https://rawgit.com/dev-ayham/timer/master/timer.js" type="text/javascript" charset="utf-8"></script>
        <div id="container">
            <div id="countdown">
                <canvas id="countdown360_countdown" width="50%" height="300">
                    <span id="countdown-text" role="status" aria-live="assertive"></span>
                </canvas>
            </div>
            <script type="text/javascript" charset="utf-8">

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
            </script>
        </div>
</center>
</div>
