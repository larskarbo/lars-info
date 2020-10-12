for D in `find ./scr -mindepth 1 -maxdepth 1`
do
    # cd $D
    echo $D
    sips -Z 200 $D --out ./gen
    # echo $(pwd)
    # git archive -o ~/slett/$(basename $D).zip HEAD
done