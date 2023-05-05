$(document).ready(function(){
    $(".button_3").click(function(){
        $(".box_12").hide(500)
        $(".p_12").hide(500)
        $(".tugadi").show(500)
        $(".buyurtma").hide(500)
        productNumber = 0
        $('.p_8').text(productNumber)
    })
    $(".icon-delete").click(function(){
        $(".buyurtma").hide(500)
        $(".box_12").hide(500)
        $(".p_12").show(500)
        productNumber = 0
        $('.p_8').text(productNumber)
    })
    $(".box_12").hide();
    let productNumber = 0
    let jamiNumber = 0
    let narsaNumber = document.getElementById("p_10")
    let narsaNumber2 = document.getElementById("p_8")
    let nechta = document.getElementById("p_15")
    let jami = document.getElementById("p_16")
    $(".icon-plus_1").click(function(){
        $(".box_12").show(500)
        $(".p_12").hide(500)
        $(".buyurtma").show(500)
        $(".tugadi").hide(500)
        productNumber ++;
        jamiNumber = productNumber * 125;
        narsaNumber.textContent=productNumber;
        narsaNumber2.textContent=productNumber;
        nechta.textContent=productNumber;
        jami.textContent = "$" + jamiNumber + "." + "00";
    })
    $(".icon-minus_1").click(function(){
        $(".tugadi").hide(500)
        if (productNumber > 0) {
            productNumber --;
            jamiNumber = productNumber * 125;
        }
        narsaNumber.textContent=productNumber;
        narsaNumber2.textContent=productNumber;
        nechta.textContent=productNumber;
        jami.textContent = "$" + jamiNumber + "." + "00";
        if (productNumber == 0) {
            $(".box_12").hide(500)
            $(".buyurtma").hide(500)
            $(".p_12").show()
        }
    })
    let desktopSize = window.matchMedia("(min-width: 377px)");
    if (desktopSize.matches){
        $(".box_3, .box_4, .box_5, .box_6, .box_7, .buyurtma, .buyurtmalarim, .carousel_1, .box_9, .close_1, .tugadi").hide();
        $(".icon-cart_1").click(function(){
            $(".buyurtmalarim").toggle(500)
        })
        $("#Collections").mouseenter(function(){
            $(".box_3").show(500)
        }).mouseleave(function(){
            $(".box_3").hide(500)
        })
        $("#Men").mouseenter(function(){
            $(".box_4").show(500)
        }).mouseleave(function(){
            $(".box_4").hide(500)
        })
        $("#Women").mouseenter(function(){
            $(".box_5").show(500)
        }).mouseleave(function(){
            $(".box_5").hide(500)
        })
        $("#About").mouseenter(function(){
            $(".box_6").show(500)
        }).mouseleave(function(){
            $(".box_6").hide(500)
        })
        $("#Contact").mouseenter(function(){
            $(".box_7").show(500)
        }).mouseleave(function(){
            $(".box_7").hide(500)
        })
        $(".image-product-1-thumbnail").click(function(){
            $(".image-product-2-thumbnail").mouseenter(function(){
                $(".image-product-2-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-2-thumbnail").css("opacity", "1")
            })
            $(".image-product-3-thumbnail").mouseenter(function(){
                $(".image-product-3-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-3-thumbnail").css("opacity", "1")
            })
            $(".image-product-4-thumbnail").mouseenter(function(){
                $(".image-product-4-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-4-thumbnail").css("opacity", "1")
            })
            $(".image-product-1-thumbnail").css("border", "2px solid #FF7E1B")
            $(".image-product-1-thumbnail").css("opacity", "0.25")
            $(".image-product-2-thumbnail").css("border", "none")
            $(".image-product-2-thumbnail").css("opacity", "1")
            $(".image-product-3-thumbnail").css("border", "none")
            $(".image-product-3-thumbnail").css("opacity", "1")
            $(".image-product-4-thumbnail").css("border", "none")
            $(".image-product-4-thumbnail").css("opacity", "1")
            $(".image-product-1_2").show()
            $(".image-product-2_2").hide()
            $(".image-product-3_2").hide()
            $(".image-product-4_2").hide()
        })
        $(".image-product-2-thumbnail").click(function(){
            $(".image-product-1-thumbnail").mouseenter(function(){
                $(".image-product-1-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-1-thumbnail").css("opacity", "1")
            })
            $(".image-product-3-thumbnail").mouseenter(function(){
                $(".image-product-3-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-3-thumbnail").css("opacity", "1")
            })
            $(".image-product-4-thumbnail").mouseenter(function(){
                $(".image-product-4-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-4-thumbnail").css("opacity", "1")
            })
            $(".image-product-1-thumbnail").css("border", "none")
            $(".image-product-1-thumbnail").css("opacity", "1")
            $(".image-product-2-thumbnail").css("border", "2px solid #FF7E1B")
            $(".image-product-2-thumbnail").css("opacity", "0.25")
            $(".image-product-3-thumbnail").css("border", "none")
            $(".image-product-3-thumbnail").css("opacity", "1")
            $(".image-product-4-thumbnail").css("border", "none")
            $(".image-product-4-thumbnail").css("opacity", "1")
            $(".image-product-1_2").hide()
            $(".image-product-2_2").show()
            $(".image-product-3_2").hide()
            $(".image-product-4_2").hide()
        })
        $(".image-product-3-thumbnail").click(function(){
            $(".image-product-1-thumbnail").mouseenter(function(){
                $(".image-product-1-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-1-thumbnail").css("opacity", "1")
            })
            $(".image-product-2-thumbnail").mouseenter(function(){
                $(".image-product-2-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-2-thumbnail").css("opacity", "1")
            })
            $(".image-product-4-thumbnail").mouseenter(function(){
                $(".image-product-4-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-4-thumbnail").css("opacity", "1")
            })
            $(".image-product-1-thumbnail").css("border", "none")
            $(".image-product-1-thumbnail").css("opacity", "1")
            $(".image-product-2-thumbnail").css("border", "none")
            $(".image-product-2-thumbnail").css("opacity", "1")
            $(".image-product-3-thumbnail").css("border", "2px solid #FF7E1B")
            $(".image-product-3-thumbnail").css("opacity", "0.25")
            $(".image-product-4-thumbnail").css("border", "none")
            $(".image-product-4-thumbnail").css("opacity", "1")
            $(".image-product-1_2").hide()
            $(".image-product-2_2").hide()
            $(".image-product-3_2").show()
            $(".image-product-4_2").hide()
        })
        $(".image-product-4-thumbnail").click(function(){
            $(".image-product-1-thumbnail").mouseenter(function(){
                $(".image-product-1-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-1-thumbnail").css("opacity", "1")
            })
            $(".image-product-2-thumbnail").mouseenter(function(){
                $(".image-product-2-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-2-thumbnail").css("opacity", "1")
            })
            $(".image-product-3-thumbnail").mouseenter(function(){
                $(".image-product-3-thumbnail").css("opacity", "0.5")
            }).mouseleave(function(){
                $(".image-product-3-thumbnail").css("opacity", "1")
            })
            $(".image-product-1-thumbnail").css("border", "none")
            $(".image-product-1-thumbnail").css("opacity", "1")
            $(".image-product-2-thumbnail").css("border", "none")
            $(".image-product-2-thumbnail").css("opacity", "1")
            $(".image-product-3-thumbnail").css("border", "none")
            $(".image-product-3-thumbnail").css("opacity", "1")
            $(".image-product-4-thumbnail").css("border", "2px solid #FF7E1B")
            $(".image-product-4-thumbnail").css("opacity", "0.25")
            $(".image-product-1_2").hide()
            $(".image-product-2_2").hide()
            $(".image-product-3_2").hide()
            $(".image-product-4_2").show()
        })
        $(".image-product-1, .image-product-2, .image-product-3, .image-product-4").click(function(){
            $(".carousel_1").show(500)
            $(".box_9").show()
            $(".close_1").show()
        })
        $(".close_1").click(function(){
            $(".carousel_1").hide(500)
            $(".box_9").hide()
            $(".close_1").hide()            
        })
    }
    else {
        $(".box_9, .box_10, .buyurtma, .buyurtmalarim").hide();
        $(".icon-cart_1").click(function(){
            $(".buyurtmalarim").toggle(500)
        })
        $(".menu_1").click(function(){
            $(".box_9").toggle(200)
            $(".box_10").toggle(600)
        })
        $(".close_2").click(function(){
            $(".box_9").toggle(200)
            $(".box_10").toggle(600)
        })
        $(".icon-plus_1").click(function(){
            $(".buyurtma").show(500)
        })
    }
});
