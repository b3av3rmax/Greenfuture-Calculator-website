function multi() {
    let num1 = parseFloat(document.getElementById("tap1").value) || 0;
    let num2 = parseFloat(document.getElementById("tap2").value) || 0;
    let num3 = parseFloat(document.getElementById("tap3").value) || 0;
    let num4 = parseFloat(document.getElementById("tap4").value) || 0;
    let num5 = parseFloat(document.getElementById("tap5").value) || 0;
    let num6 = parseFloat(document.getElementById("tap6").value) || 0;
    let num7 = parseFloat(document.getElementById("tap7").value) || 0;
    let num8 = parseFloat(document.getElementById("tap8").value) || 0;
    let num9 = parseFloat(document.getElementById("tap9").value) || 0;
    let num10 = parseFloat(document.getElementById("tap10").value) || 0;
    let num11 = parseFloat(document.getElementById("tap11").value) || 0;
    let num12 = parseFloat(document.getElementById("tap12").value) || 0;
    let num13 = parseFloat(document.getElementById("tap13").value) || 0;
    let num14 = parseFloat(document.getElementById("tap14").value) || 0;
    let num15 = parseFloat(document.getElementById("tap15").value) || 0;
    let num16 = parseFloat(document.getElementById("tap16").value) || 0;
    let num17 = parseFloat(document.getElementById("tap17").value) || 0;
    let num18 = parseFloat(document.getElementById("tap18").value) || 0;
    let num19 = parseFloat(document.getElementById("tap19").value) || 0;
    let num20 = parseFloat(document.getElementById("tap20").value) || 0;
    let num21 = parseFloat(document.getElementById("tap21").value) || 0;
    let num22 = parseFloat(document.getElementById("tap22").value) || 0;
    let num23 = parseFloat(document.getElementById("tap23").value) || 0;
    let num24 = parseFloat(document.getElementById("tap24").value) || 0;

    let res1 = num1 * num2 * 10;
    let res2 = num3 * num4 * 6;
    let res3 = num5 * num6 * 6;
    let res4 = num7 * num8;
    let res5 = num9 * num10 * 12;
    let res6 = num11 * num12 * 7;
    let res7 = num13 * num14 * 0.18;
    let res8 = num15 * num16 * 6;
    let res9 = num17 * num18 * 10;
    let res10 = num19 * num20;
    let res11 = num21 * num22 * 0.18;
    let res12 = num23 * num24 * 10;

    document.getElementById("water1").value = res1.toFixed(1) + " L";
    document.getElementById("water2").value = res2.toFixed(1) + " L";
    document.getElementById("water3").value = res3.toFixed(1) + " L";
    document.getElementById("water4").value = res4.toFixed(1) + " L";
    document.getElementById("water5").value = res5.toFixed(1) + " L";
    document.getElementById("water6").value = res6.toFixed(1) + " L";
    document.getElementById("water7").value = res7.toFixed(1) + " L";
    document.getElementById("water8").value = res8.toFixed(1) + " L";
    document.getElementById("water9").value = res9.toFixed(1) + " L";
    document.getElementById("water10").value = res10.toFixed(1) + " L";
    document.getElementById("water11").value = res11.toFixed(1) + " L";
    document.getElementById("water12").value = res12.toFixed(1) + " L";

    let score1 = Math.min(Math.round(res1 / 10), 10);
    let score2 = Math.min(Math.round(res2 / 10), 10);
    let score3 = Math.min(Math.round(res3 / 10), 10);
    let score4 = Math.min(Math.round(res4 / 10), 10);
    let score5 = Math.min(Math.round(res5 / 10), 10);
    let score6 = Math.min(Math.round(res6 / 10), 10);
    let score7 = Math.min(Math.round(res7 / 10), 10);
    let score8 = Math.min(Math.round(res8 / 10), 10);
    let score9 = Math.min(Math.round(res9 / 10), 10);
    let score10 = Math.min(Math.round(res10 / 10), 10);
    let score11 = Math.min(Math.round(res11 / 10), 10);
    let score12 = Math.min(Math.round(res12 / 10), 10);

    document.getElementById("score1").value = score1;
    document.getElementById("score2").value = score2;
    document.getElementById("score3").value = score3;
    document.getElementById("score4").value = score4;
    document.getElementById("score5").value = score5;
    document.getElementById("score6").value = score6;
    document.getElementById("score7").value = score7;
    document.getElementById("score8").value = score8;
    document.getElementById("score9").value = score9;
    document.getElementById("score10").value = score10;
    document.getElementById("score11").value = score11;
    document.getElementById("score12").value = score12;

    let totalWater = res1 + res2 + res3 + res4 + res5 + res6 + res7 + res8 + res9 + res10 + res11 + res12;
    let totalScore = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11 + score12;

    document.getElementById("sum").value = totalWater.toFixed(1) + " L";
    document.getElementById("sum1").value = totalScore;

    // Highlight category
    [1, 2, 3, 4, 5].forEach(i => {
        document.getElementById("cat" + i).classList.remove("bg-primary/10", "border-primary/30");
    });
    if (totalScore <= 20) document.getElementById("cat1").classList.add("bg-primary/10", "border-primary/30");
    else if (totalScore <= 40) document.getElementById("cat2").classList.add("bg-primary/10", "border-primary/30");
    else if (totalScore <= 60) document.getElementById("cat3").classList.add("bg-primary/10", "border-primary/30");
    else if (totalScore <= 80) document.getElementById("cat4").classList.add("bg-primary/10", "border-primary/30");
    else document.getElementById("cat5").classList.add("bg-primary/10", "border-primary/30");
}

function multi2() {
    let cup1 = parseFloat(document.getElementById("cup1").value) || 0;
    let cup2 = parseFloat(document.getElementById("cup2").value) || 0;
    let cup3 = parseFloat(document.getElementById("cup3").value) || 0;

    let co2_1 = cup1 * 180 * 0.0003;
    let co2_2 = cup2 * 500 * 0.238;
    let co2_3 = cup3 * 180 * 0.02;

    document.getElementById("co2-1").value = co2_1.toFixed(2) + " g";
    document.getElementById("co2-2").value = co2_2.toFixed(2) + " g";
    document.getElementById("co2-3").value = co2_3.toFixed(2) + " g";

    let yearly1 = (co2_1 * 365 / 1000).toFixed(2);
    let yearly2 = (co2_2 * 365 / 1000).toFixed(2);
    let yearly3 = (co2_3 * 365 / 1000).toFixed(2);

    document.getElementById("co2score1").value = yearly1 + " kg";
    document.getElementById("co2score2").value = yearly2 + " kg";
    document.getElementById("co2score3").value = yearly3 + " kg";

    let dailyCo2 = co2_1 + co2_2 + co2_3;
    document.getElementById("sum2").value = dailyCo2.toFixed(2) + " g";

    let trees = (dailyCo2 * 365 / 1000 / 6.6).toFixed(2);
    document.getElementById("sum3").value = trees + " 그루";
}