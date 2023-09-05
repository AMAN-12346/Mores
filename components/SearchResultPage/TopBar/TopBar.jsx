"use client"
const TopBar = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white text-center h-32"
      style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/04a3/a78b/521630aaef5248838da3451f8492e3be?Expires=1693785600&Signature=nlFEPYRkyBsMVGX3uM~jdlRSUR~n~eleWjNSXZzC7uZcPVVwSZLuMqWwdngnNy~yiDUytbRynHfsVilT1IgqUL0lKRv7NcFzHTwNRUrMLlP8FNpii7urf9iYYdCyqAlHW4kxxyjYFjO3rfAPXfLUnRX7XNC2gMR6BK33WoLAcM3Fl9Ji6A2G1ztnu4PNX4OiYpU59caHfiPxmkie3O5mqcu4~xQc~egCOFNI-NmLsCWgFcwBMoHVWpRf4klM7g0qasKPILM9W5p2iEQuUheAyyWrePLoVSIYUTdPmbuoIAT-chLCxIjj7EuWGT8dXZtVs3hg6m-nmeaD~qIHWFN4Sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold">Buy</h1>
      </div>
    </div>
  );
};
export default TopBar