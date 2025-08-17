function Img(props){
  console.log(props , Math.random());
  return(
    <div className="h-screen grid place-content-center">
<img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl size-32"
          />
</div>
  )
};
export default Img;