import Head from 'next/head'
import { useLoans } from 'gql-api/get-loans'
import SharedLayout from 'components/shared-layout'

export default function Home(): JSX.Element {
  const loans = useLoans()

  return (
    <SharedLayout>
      <Head>
        <title>Loan Review</title>
      </Head>
      <div className="h-screen bg-white overflow-hidden flex">
        <div className="flex-1 w-0 flex flex-col">
          <div className="md:px-16 md:py-32 overflow-y-auto">
            <div className="max-w-prose flex flex-col sm:space-y-4">
              <h2 className="inclined-text-5xl-roboto-black font-header">
                Loans
              </h2>
            </div>
            <div className="max-w-2xl xl:max-w-5xl flex flex-col sm:space-y-6 pt-16 pb-16">
              {loans && (
                <>
                  <div key={'header'} className="grid grid-cols-8 gap-8">
                    <div className="col-span-1 inclined-text-xs-roboto-mono-medium text-dark-grey">
                      <span className="inclined-text-sm-roboto-mono-bold text-black">
                        Loan #
                      </span>
                    </div>
                    <div className="col-span-1 inclined-text-xs-roboto-mono-medium text-dark-grey">
                      <span className="inclined-text-sm-roboto-mono-bold text-black">
                        Name
                      </span>
                    </div>
                    <div className="col-span-1 inclined-text-xs-roboto-mono-medium text-dark-grey">
                      <span className="inclined-text-sm-roboto-mono-bold text-black">
                        Status
                      </span>
                    </div>
                    <div className="col-span-1 inclined-text-xs-roboto-mono-medium text-dark-grey">
                      <span className="inclined-text-sm-roboto-mono-bold text-black">
                        Amount
                      </span>
                    </div>
                  </div>
                  {loans.map((loan) => (
                    <div key={loan.id} className="grid grid-cols-8 gap-8">
                      <div className="col-span-1 inclined-text-xs-roboto-mono-medium text-dark-grey">
                        <span className="inclined-text-sm-roboto-mono-bold text-black">
                          {loan.id}
                        </span>
                      </div>
                      <div className="col-span-1 inclined-text-xs-roboto-mono-medium text-dark-grey">
                        <span className="inclined-text-sm-roboto-mono-bold text-black">
                          {loan.name}
                        </span>
                      </div>
                      <div className="col-span-1 inclined-text-xs-roboto-mono-medium text-dark-grey">
                        <span className="inclined-text-sm-roboto-mono-bold text-black">
                          {loan.status}
                        </span>
                      </div>
                      <div className="col-span-1 inclined-text-xs-roboto-mono-medium text-dark-grey">
                        <span className="inclined-text-sm-roboto-mono-bold text-black">
                          {loan.amount}
                        </span>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </SharedLayout>
  )
}
