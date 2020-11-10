$object  = Import-Csv -Path "U:\users\sid82\desktop\brallieLetters.csv" -Delimiter "`t"

$count =1
foreach($element in $object)
{

$letter = $element.letter
$Caps = $letter.ToUpper()
$id= $element.id


$target =@"
let $letter =
{   
    `"id`" : `"$id`",
    `"character`": `"$letter`",
    `"uppercase`": `"$($letter.ToUpper())`"
}
"@

$count++

write-host $target    
}
