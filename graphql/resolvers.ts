import {
  MutationResolvers,
  QueryResolvers,
  Resolvers,
} from 'graphql/__generated__/resolvers-types'
import prisma from 'lib/prisma'

const queryResolvers: QueryResolvers = {
  loans: (parent, args) => {
    return prisma.loan.findMany(
      args.status ? { where: { status: args.status } } : undefined
    )
  },
}

const mutationResolvers: MutationResolvers = {
  updateLoan: (parent, args) => {
    return prisma.loan.update({
      where: {
        id: args.id,
      },
      data: {
        status: args.newStatus,
      },
    })
  },
}

const loanResolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
}

const resolvers = [loanResolvers]

export default resolvers
