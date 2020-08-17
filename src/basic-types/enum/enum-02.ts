{
  enum Week {
    Sun,
    Mon = 22,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
  }
  console.log(Week.Mon);
  console.log(Week.Tue);
  console.log(Week['Sat']);

  console.log(Week[0]);
  console.log(Week[24]);
}
