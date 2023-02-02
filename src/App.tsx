import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
`

const Header = styled.div`
  height: 449px;
  display: flex;
  justify-content: center;
  padding-top: 64px;
  background: #f1f5fe;
  border-bottom-left-radius: calc(449px / 2);
`

const Flex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  h1,
  p {
    margin: 0;
    text-align: center;
  }
  z-index: 1;
`

const StyledLargeCircle = styled.div`
  position: absolute;
  top: -18px;
  left: calc(50% - 63px);
  height: 126px;
  width: 126px;
  background: transparent;
  border: 1px solid #cfd8ef;
  border-radius: 999px;
  z-index: -1;
`

const StyledSmallCircle = styled.div`
  position: absolute;
  left: 50%;
  top: -12px;
  height: 82px;
  width: 82px;
  border-radius: 999px;
  border: 1px solid #cfd8ef;
`

const PricingCard = styled.div`
  margin: -200px auto;
  position: relative;
  width: 540px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 20px 30px -5px rgba(127, 137, 185, 0.152073);
  user-select: none;
  z-index: 10;
`

const LeadingContent = styled.div`
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
`
const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PageViews = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #848ead;
  font-weight: 800;
`

const Price = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: flex;
  column-gap: 8px;
  align-items: center;
  .frequency {
    font-size: 16px;
    font-weight: 500;
    color: #848ead;
  }
`

const Slider = styled.input`
  margin-top: 24px;
  margin-bottom: 40px;
`
const TrailingContent = styled.div`
  border-top: 1px solid #ecf0fb;
  padding: 32px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MetaText = styled.span`
  font-size: 12px;
  color: #848ead;
`

const DiscountBadge = styled.span`
  background: #feede8;
  color: #ff8d68;
  font-size: 10px;
  text-align: center;
  padding: 4px 8px;
  border-radius: 9999px;
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const Button = styled.button`
  all: unset;
  height: 40px;
  padding: 12px 48px;
  background: #293356;
  color: #becdff;
  border-radius: 9999px;
`

function App() {
  return (
    <Wrapper>
      <Header>
        <Flex>
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial. No credit card required. </p>
          <StyledLargeCircle>
            <StyledSmallCircle />
          </StyledLargeCircle>
        </Flex>
      </Header>
      <PricingCard>
        <LeadingContent>
          <CardInfo>
            <PageViews>100K PAGEVIEWS</PageViews>
            <Price>
              <span>$16.00</span>
              <span className="frequency">/ month</span>
            </Price>
          </CardInfo>
          <Slider type="range" />
          <div style={{ display: 'flex', columnGap: 24, alignItems: 'center', justifyContent: 'center' }}>
            <MetaText>Monthly Billing</MetaText>
            <input type="checkbox" />
            <div style={{ display: 'flex', alignItems: 'center', columnGap: 8 }}>
              <MetaText>Yearly Billing</MetaText>
              <DiscountBadge>25% Discount</DiscountBadge>
            </div>
          </div>
        </LeadingContent>
        <TrailingContent>
          <Stack>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: 8 }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={10} viewBox="0 0 37 29">
                <path stroke="#10D8C4" strokeWidth="4" d="M2 16.9205 11.0795 26l24-24" />
              </svg>
              <MetaText>Unlimited websites</MetaText>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: 8 }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={10} viewBox="0 0 37 29">
                <path stroke="#10D8C4" strokeWidth="4" d="M2 16.9205 11.0795 26l24-24" />
              </svg>
              <MetaText>100% data ownership </MetaText>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: 8 }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={10} viewBox="0 0 37 29">
                <path stroke="#10D8C4" strokeWidth="4" d="M2 16.9205 11.0795 26l24-24" />
              </svg>
              <MetaText>Email reports</MetaText>
            </div>
          </Stack>
          <Button>Start my trail</Button>
        </TrailingContent>
      </PricingCard>
    </Wrapper>
  )
}

export default App
