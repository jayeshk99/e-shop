require("dotenv").config();
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const Cart = require("../models/cart.products.model");
const Product = require("../models/products.model");
const sslChecker = require("ssl-checker");

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user)
      return res
        .status(400)
        .send({ message: "User with that email already exists" });

    user = await User.create(req.body);

    const token = newToken(user);

    return res.status(201).send({ user, token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const login = async (req, res) => {
  // try {
  //   // const urls = await getSSLUrls();
  //   // const uniqueUrls: UrlMonitoring[] = urls.filter(
  //   //   (url, index, self) =>
  //   //     index ===
  //   //     self.findIndex((u) => u.FriendlyName === url.FriendlyName && u.CompanyId === url.CompanyId)
  //   // );
  //   // let trms = uniqueUrls.filter((row) => row.WebUrl === 'https://fractionalqa.com');
  //   let trms = [
  //     {
  //       Id: 328,
  //       CompanyId: 169,
  //       FriendlyName: "FractionalQA",
  //       WebUrl: "https://fractionalqa.com",
  //       Type: "https",
  //       IsMonitoring: true,
  //       LastActive: true,
  //       IsSSL: true,
  //       Timeout: 30000,
  //       Frequency: 5,
  //       IsDeleted: false,
  //       Method: "GET",
  //       Body: null,
  //       Headers: null,
  //       Port: null,
  //       refreshTokenAPI: "",
  //       acceptedStatuses: null,
  //       Region: "us-east-1",
  //       Maintenance: null,
  //       SSLStatus: true,
  //       LastChecked: "2024-04-22T01:45:00.000Z",
  //       SSLLastChecked: "2024-04-22T01:49:03.253Z",
  //       SSLExpiry: 45,
  //       LastNotified: "1711642560001",
  //       NotificationInterval: 300000,
  //       NotificationCount: 0,
  //       EscalationThreshold: null,
  //       createdAt: "2023-09-19T14:11:15.117Z",
  //       updatedAt: "2024-04-22T07:19:03.253Z",
  //     },
  //   ];
  //   let uniqueUrls = [1];
  //   // console.log('trms:', trms);
  //   // const SSLRecommendations = await getALLSSLRecommendations();
  //   if (uniqueUrls.length) {
  //     const SSLDetails = [];
  //     await Promise.all(
  //       trms.map(async (row) => {
  //         try {
  //           let sslUrl = row.WebUrl.replace(`${row.Type}://`, "");
  //           sslUrl = sslUrl.split("/")[0];
  //           const sslStatus = await sslChecker(sslUrl.trim(), {
  //             method: "GET",
  //             port: 443,
  //             timeout: 30000,
  //           });
  //           SSLDetails.push({
  //             UrlId: row.Id,
  //             WebUrl: row.WebUrl,
  //             Date: new Date().toJSON().slice(0, 10),
  //             Time: new Date().toJSON().slice(11, 16),
  //             SSL: sslStatus?.valid ? true : false,
  //             SSLExpiry: sslStatus?.daysRemaining
  //               ? sslStatus.daysRemaining
  //               : null,
  //             ServerStatus: "reachable",
  //           });
  //           if (
  //             SSLRecommendations.length &&
  //             SSLRecommendations.find(
  //               (record) => record.CompanyId === row.CompanyId
  //             ) &&
  //             sslStatus.daysRemaining <=
  //               SSLRecommendations.find(
  //                 (record) => record.CompanyId === row.CompanyId
  //               ).RecommendedDays
  //           ) {
  //             // const company = await findCompany(row.CompanyId);
  //             // try {
  //             //   const slackUrls = await slackReciever(row.Id, 'Regular');
  //             //   if (slackUrls.length) {
  //             //     const payload = slackSSLExpiringTemplate(
  //             //       row,
  //             //       company.name,
  //             //       sslStatus.daysRemaining <= 7
  //             //         ? 'Critical'
  //             //         : sslStatus.daysRemaining <= 15
  //             //         ? 'High'
  //             //         : sslStatus.daysRemaining <= 22
  //             //         ? 'Medium'
  //             //         : 'Low',
  //             //       sslStatus.daysRemaining,
  //             //       sslStatus.valid
  //             //     );
  //             //     const SlackResponses = slackUrls.map(async (url) => {
  //             //       await sendSlackMessage(payload, `${url}`, 3);
  //             //     });
  //             //     Promise.all(SlackResponses);
  //             //   }
  //             // } catch (error) {
  //             //   console.log('slack error', error.message);
  //             // }
  //             // try {
  //             //   const mailReceivers = await mailReceiver(row.Id, 'Regular');
  //             //   if (mailReceivers.length) {
  //             //     const message = sslExpiringTemplate(
  //             //       mailReceivers,
  //             //       row,
  //             //       company.name,
  //             //       sslStatus.daysRemaining <= 7
  //             //         ? 'Critical'
  //             //         : sslStatus.daysRemaining <= 15
  //             //         ? 'High'
  //             //         : sslStatus.daysRemaining <= 22
  //             //         ? 'Medium'
  //             //         : 'Low',
  //             //       sslStatus.daysRemaining,
  //             //       sslStatus.valid
  //             //     );
  //             //     await sendMailToRecipient(message, 3);
  //             //   }
  //             // } catch (error) {
  //             //   console.log('mail error', error.message);
  //             // }
  //             // try {
  //             //   const chatReceivers = await chatReceiver(row.Id, 'Regular');
  //             //   if (chatReceivers.length) {
  //             //     const payload = sslGoogleChatTemplate(
  //             //       row,
  //             //       sslStatus.daysRemaining,
  //             //       sslStatus.valid
  //             //     );
  //             //     const gchatResponses = chatReceivers.map(async (url) => {
  //             //       await sendGchatMessage(payload, `${url}`, 3);
  //             //     });
  //             //     Promise.all(gchatResponses);
  //             //   }
  //             // } catch (error) {
  //             //   console.log('google chat error', error.message);
  //             // }
  //           } else if (
  //             sslStatus.daysRemaining <= 7 ||
  //             sslStatus.daysRemaining === 15 ||
  //             sslStatus.daysRemaining === 22 ||
  //             sslStatus.daysRemaining === 30
  //           ) {
  //             // const company = await findCompany(row.CompanyId);
  //             // try {
  //             //   const slackUrls = await slackReciever(row.Id, 'Regular');
  //             //   if (slackUrls.length) {
  //             //     const payload = slackSSLExpiringTemplate(
  //             //       row,
  //             //       company.name,
  //             //       sslStatus.daysRemaining <= 7
  //             //         ? 'Critical'
  //             //         : sslStatus.daysRemaining === 15
  //             //         ? 'High'
  //             //         : sslStatus.daysRemaining === 22
  //             //         ? 'Medium'
  //             //         : 'Low',
  //             //       sslStatus.daysRemaining,
  //             //       sslStatus.valid
  //             //     );
  //             //     const SlackResponses = slackUrls.map(async (url) => {
  //             //       await sendSlackMessage(payload, `${url}`, 3);
  //             //     });
  //             //     Promise.all(SlackResponses);
  //             //   }
  //             // } catch (error) {
  //             //   console.log('slack error', error.message);
  //             // }
  //             // try {
  //             //   const mailReceivers = await mailReceiver(row.Id, 'Regular');
  //             //   if (mailReceivers.length) {
  //             //     const message = sslExpiringTemplate(
  //             //       mailReceivers,
  //             //       row,
  //             //       company.name,
  //             //       sslStatus.daysRemaining <= 7
  //             //         ? 'Critical'
  //             //         : sslStatus.daysRemaining === 15
  //             //         ? 'High'
  //             //         : sslStatus.daysRemaining === 22
  //             //         ? 'Medium'
  //             //         : 'Low',
  //             //       sslStatus.daysRemaining,
  //             //       sslStatus.valid
  //             //     );
  //             //     await sendMailToRecipient(message, 3);
  //             //   }
  //             // } catch (error) {
  //             //   console.log('mail error', error.message);
  //             // }
  //             // try {
  //             //   const chatReceivers = await chatReceiver(row.Id, 'Regular');
  //             //   if (chatReceivers.length) {
  //             //     const payload = sslGoogleChatTemplate(
  //             //       row,
  //             //       sslStatus.daysRemaining,
  //             //       sslStatus.valid
  //             //     );
  //             //     const gchatResponses = chatReceivers.map(async (url) => {
  //             //       await sendGchatMessage(payload, `${url}`, 3);
  //             //     });
  //             //     Promise.all(gchatResponses);
  //             //   }
  //             // } catch (error) {
  //             //   console.log('google chat error', error.message);
  //             // }
  //           }

  //           // await UrlMonitoring.update(
  //           //   {
  //           //     SSLStatus: sslStatus?.valid ? true : false,
  //           //     SSLLastChecked: moment(new Date(), 'YYYY:MM:DD HH:mm'),
  //           //     SSLExpiry: sslStatus.daysRemaining,
  //           //   },
  //           //   { where: { CompanyId: row.CompanyId, FriendlyName: row.FriendlyName } }
  //           // );
  //         } catch (error) {
  //           console.log("inside catch", error);
  //           SSLDetails.push({
  //             UrlId: row.Id,
  //             WebUrl: row.WebUrl,
  //             Date: new Date().toJSON().slice(0, 10),
  //             Time: new Date().toJSON().slice(11, 16),
  //             SSL: null,
  //             SSLExpiry: null,
  //             ServerStatus: "unreachable",
  //           });
  //           // const company = await findCompany(row.CompanyId);
  //           // try {
  //           //   const slackUrls = await slackReciever(row.Id, 'Regular');

  //           //   if (slackUrls.length) {
  //           //     const payload = slackSSLExpiringTemplate(
  //           //       row,
  //           //       company.name,
  //           //       'unknown',
  //           //       'N/A',
  //           //       'N/A'
  //           //     );

  //           //     const SlackResponses = slackUrls.map(async (url) => {
  //           //       await sendSlackMessage(payload, `${url}`, 3);
  //           //     });
  //           //     Promise.all(SlackResponses);
  //           //   }
  //           // } catch (error) {
  //           //   console.log('slack error', error.message);
  //           // }
  //           // try {
  //           //   const mailReceivers = await mailReceiver(row.Id, 'Regular');

  //           //   if (mailReceivers.length) {
  //           //     const message = sslExpiringTemplate(
  //           //       mailReceivers,
  //           //       row,
  //           //       company.name,
  //           //       'unknown',
  //           //       'N/A',
  //           //       'N/A'
  //           //     );

  //           //     await sendMailToRecipient(message, 3);
  //           //   }
  //           // } catch (error) {
  //           //   console.log('mail error', error.message);
  //           // }
  //           // try {
  //           //   const chatReceivers = await chatReceiver(row.Id, 'Regular');
  //           //   if (chatReceivers.length) {
  //           //     const payload = sslGoogleChatTemplate(row, 'N/A', 'N/A');
  //           //     const gchatResponses = chatReceivers.map(async (url) => {
  //           //       await sendGchatMessage(payload, `${url}`, 3);
  //           //     });
  //           //     Promise.all(gchatResponses);
  //           //   }
  //           // } catch (error) {
  //           //   console.log('google chat error', error.message);
  //           // }
  //           // await UrlMonitoring.update(
  //           //   {
  //           //     SSLStatus: null,
  //           //     SSLLastChecked: moment(new Date(), 'YYYY:MM:DD HH:mm'),
  //           //     SSLExpiry: null,
  //           //   },
  //           //   { where: { CompanyId: row.CompanyId, FriendlyName: row.FriendlyName } }
  //           // );
  //         }
  //       })
  //     );
  //     console.log("SSLDetails:", SSLDetails);
  //     // await SSLData.bulkCreate(SSLDetails);
  //   }
  // } catch (error) {
  //   console.log("Error in ssl validation:---", error.message);
  // }

  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user)
      return res
        .status(400)
        .send({ message: "Either Email or Password is incorrect" });

    const match = user.checkPassword(req.body.password);

    if (!match)
      return res
        .status(400)
        .send({ message: "Either Email or Password is incorrect" });

    const token = newToken(user);

    return res.status(201).send({ user, token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = { register, login, newToken };
