$(document).ready(function() {
    var cal_view = $("#cal-view");

    // Add click event to number buttons
    $('.cal-key').on('click', function() {
        var key_text = $(this).text();
        cal_view.val(cal_view.val() + key_text);
    });


    // Define calculator functions
    window.sin = function() {
        cal_view.val(Math.sin(cal_view.val()));
    };

    window.cos = function() {
        cal_view.val(Math.cos(cal_view.val()));
    };

    window.tan = function() {
        cal_view.val(Math.tan(cal_view.val()));
    };

    window.sqrt = function() {
        cal_view.val(Math.sqrt(cal_view.val()));
    };

    window.log = function() {
        cal_view.val(Math.log(cal_view.val()));
    };

    window.pi = function() {
        cal_view.val(3.14159265359);
    };

    window.e = function() {
        cal_view.val(2.71828182846);
    };

    window.factorial = function() {
        var num = parseInt(cal_view.val());
        var result = 1;
        for (var i = 1; i <= num; i++) {
            result *= i;
        }
        cal_view.val(result);
    };

    $('#clear-btn').on('click', function() {
        cal_view.val('');
    });

    $('#backspace-btn').on('click', function() {
        cal_view.val(cal_view.val().substring(0, cal_view.val().length - 1));
    });

    // Power function
    window.pow = function() {
        cal_view.val(cal_view.val() + "^");
    };

    // Validate input
    function validateInput(input) {
        // Regular expression to check for allowed characters
        const regex = /^[0-9+\-*/().^πsin|cos|tan|log|sqrt|e]*$/;

        // Check for empty input
        if (input.trim() === "") {
            alert("Input cannot be empty!");
            return false;
        }

        // Check for allowed characters
        if (!regex.test(input)) {
            alert("Invalid characters in input!");
            return false;
        }

        // Check for balanced parentheses
        let balance = 0;
        for (let char of input) {
            if (char === '(') balance++;
            if (char === ')') balance--;
            if (balance < 0) {
                alert("Unmatched parentheses!");
                return false;
            }
        }
        if (balance !== 0) {
            alert("Unmatched parentheses!");
            return false;
        }

        // Prevent multiple operators in a row
        if (/[\+\-*/^]{2,}/.test(input)) {
            alert("Multiple operators in a row!");
            return false;
        }

        // Prevent operator at the beginning or end
        if (/^[+\-*/^]|[+\-*/^]$/.test(input)) {
            alert("Invalid use of operators!");
            return false;
        }

        return true;
    }

    // Calculate result
    $('#equal-btn').on('click', function() {
        let expression = cal_view.val();

        // Replace ^ with ** for proper exponentiation
        expression = expression.replace(/\^/g, '**');

        // Validate the input
        if (validateInput(expression)) {
            // Evaluate the expression
            try {
                cal_view.val(eval(expression));
            } catch (e) {
                cal_view.val("!Error");
                // Clear the error message after 3 seconds
                setTimeout(function() {
                    cal_view.val('');
                }, 3000); // Change the duration as needed
            }
        } else {
            cal_view.val("!Error");
            // Clear the error message after 3 seconds
            setTimeout(function() {
                cal_view.val('');
            }, 2000); // Change the duration as needed
        }
    });

    // Light/Dark mode toggle
    $('#mode-toggle').on('change', function() {
        if (this.checked) {
            $('body').addClass('dark-mode');
            $('.cal-container').addClass('dark-mode');
            $('#mode-icon').removeClass('fa-sun').addClass('fa-moon');
        } else {
            $('body').removeClass('dark-mode');
            $('.cal-container').removeClass('dark-mode');
            $('#mode-icon').removeClass('fa-moon').addClass('fa-sun');
        }
    });
});