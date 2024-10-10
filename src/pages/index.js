import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";
// import LuluButton from "../components/LuluButton";
// import listPrintJobs from "../utils/listPrintJobs";
// import calculatePrintCost from "../utils/calculatePrintCost";
// import createPrintJob from "../utils/createPrintJob";
// import getPrintJobStats from "../utils/getPrintJobStats";
// import getPrintJobById from "../utils/getPrintJobById";
// import getPrintJobCosts from "../utils/getPrintJobCosts";
// import retrieveShippingOptions from "../utils/retrieveShippingOptions";
// import subscribeToWebhooks from "../utils/subscribeToWebhooks";
// import getListOfWebhooks from "../utils/getListOfWebhooks";
// import getSingleWebhook from "../utils/getSingleWebhook";
// import updateWebhook from "../utils/updateWebhook";
// import deleteWebhook from "../utils/deleteWebhook";

const IndexPage = () => {

  // const printJob = () => getPrintJobById(120251);
  // const printJobCosts = () => getPrintJobCosts(120251);
  // const getWebhook = () => getSingleWebhook("4f158c8c-df06-496f-a056-3ab1855ae520");
  // const changeWebhook = () => updateWebhook("4f158c8c-df06-496f-a056-3ab1855ae520");
  // const destroyWebhook = () => deleteWebhook("2a642a31-1dcb-408b-b3a2-4e62bf909c75");

  return (
    <Layout>
      <div className={styles.textCenter}>
        {/*<h1>Sandbox to test Samcart interaction with Lulu API</h1>
        <LuluButton onClick={listPrintJobs} buttonName={"List Print Jobs"} />
        <br/>
        <LuluButton onClick={calculatePrintCost} buttonName={"Calculate Print Cost"} />
        <br/>
        <LuluButton onClick={createPrintJob} buttonName={"Create Print Job"} />
        <br/>
        <LuluButton onClick={getPrintJobStats} buttonName={"Get Print Job Stats"} />
        <br/>
        <LuluButton onClick={printJob} buttonName={`Get Print Job, ID# 120251`} />
        <br/>
        <LuluButton onClick={printJobCosts} buttonName={`Get Print Job Costs, ID# 120251`} />
        <br/>
        <LuluButton onClick={retrieveShippingOptions} buttonName={`Retrieve Shipping Options`} />
        <br/>
        <LuluButton onClick={subscribeToWebhooks} buttonName={`Subscribe To Webhooks`} />
        <br/>
        <LuluButton onClick={getListOfWebhooks} buttonName={`Get List Of Webhooks`} />
        <br/>
        <LuluButton onClick={getWebhook} buttonName={`Get Single Webhook`} />
        <br/>
        <LuluButton onClick={changeWebhook} buttonName={`Change Webhook`} />
        <br/>
        <LuluButton onClick={destroyWebhook} buttonName={`Delete Webhook`} />*/}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
