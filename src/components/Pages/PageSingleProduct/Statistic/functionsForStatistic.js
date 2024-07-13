function takeAllEstimates(productInfo) {
  let allEstimates = [];

  for (let i = 0; i < productInfo.reviews.length; i++) {
    let ratingOfReview = productInfo.reviews[i].rating;
    allEstimates.push(ratingOfReview);
  }

  return allEstimates;
}

function countPercentage(amount, length) {
  return Math.round((amount * 100) / length);
}

export function createArrOfEstimatesRercentaiges(productInfo) {
  let allEstimates = takeAllEstimates(productInfo);

  let amountOneStar = 0,
    amountTwoStars = 0,
    amountThreeStars = 0,
    amountFourStars = 0,
    amountFiveStars = 0;

  for (let i = 0; i < allEstimates.length; i++) {
    switch (allEstimates[i]) {
      case 1:
        amountOneStar++;
        break;
      case 2:
        amountTwoStars++;
        break;
      case 3:
        amountThreeStars++;
        break;
      case 4:
        amountFourStars++;
        break;
      case 5:
        amountFiveStars++;
        break;
      default:
        console.log("something went wrong with estimates");
    }
  }

  return [
    countPercentage(amountOneStar, allEstimates.length),
    countPercentage(amountTwoStars, allEstimates.length),
    countPercentage(amountThreeStars, allEstimates.length),
    countPercentage(amountFourStars, allEstimates.length),
    countPercentage(amountFiveStars, allEstimates.length),
  ];
}
