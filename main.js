const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

choice1.onclick = function() {
    feedback.textContent =
       "残念! アメリカは治安悪そうだからやめたよ！"
}
choice2.onclick = function() {
    feedback.textContent = 
       "惜しい！ここも考えてた！"
}
choice3.onclick = function() {
    feedback.textContent =
       "ナイス!今月の7月に帰るよ!ちなめに今冬に向かっているところだよ。"
}