import { render } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import { Review } from './index';
import Lucas from 'assets/lucas.png';

describe('Review', () => {
  it('Should render review text', () => {
    render(
      <Review
        img={Lucas}
        reviewText="revietext"
        reviewerDescription="review descript"
        reviewerName="reviewer"
      />
    );

    const reviewText = screen.getByText(/revietext/gi);
    expect(reviewText).toBeInTheDocument();
    expect(reviewText).toMatchSnapshot();
  });

  it('Should render reviewer description', () => {
    render(
      <Review
        img={Lucas}
        reviewText="revietext"
        reviewerDescription="reviewer description"
        reviewerName="reviewer"
      />
    );

    const reviewerDescription = screen.getByText(/reviewer description/gi);
    expect(reviewerDescription).toBeInTheDocument();
    expect(reviewerDescription).toMatchSnapshot();
  });

  it('Should render reviewer name', () => {
    render(
      <Review
        img={Lucas}
        reviewText="revietext"
        reviewerDescription="reviewer description"
        reviewerName="reviewer"
      />
    );

    const reviewer = screen.getByText(/reviewer/gi);
    expect(reviewer).toBeInTheDocument();
    expect(reviewer).toMatchSnapshot();
  });
});
