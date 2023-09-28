import Link from 'next/link';
import React from 'react';

const ALink = (props: { url: string }) => {
    return (
        <a href={props.url} className="text-cyan-600 dark:text-cyan-400">
            {props.url}
        </a>
    );
};
const AMailTo = (props: { email: string }) => {
    return (
        <a href={'mailto:' + props.email} className="font-bold">
            {props.email}
        </a>
    );
};
export default function page() {
    return (
        <div className="container space-y-8 py-8">
            <h1>Privacy Policy</h1>
            <div>Effective Date: September 01, 2023</div>
            <h2>Introduction</h2>
            <div>
                This document outlines the Privacy Policy of Venatronics LLC,
                herein referred to as {`"`}Venatronics{`"`}, {`"`}we{`"`}, {`"`}
                us{`"`}, or {`"`}our{`"`}. It covers the ways in which we
                gather, handle, and share your information via our operated
                websites and mobile apps that you access this Privacy Policy
                from (referred to as {`"`}Websites{`"`}), our social media pages
                ({`"`}Social Media Pages{`"`}), and through emails we send you
                that link back to this Privacy Policy. All these channels
                together are known as {`"`}Services{`"`}.
                <p />
                <br />
                Please note that this Privacy Policy doesn{`'`}t extend to our
                data gathering procedures offline or outside our Services unless
                otherwise outlined in Section 14 or explicitly stated at the
                point of collection or below. Use of our Services implies your
                agreement with our Terms of Use and consent to this Privacy
                Policy. By consenting to this Privacy Policy, you are consenting
                to our data collection, usage, and disclosure procedures as well
                as other activities detailed within this Privacy Policy. If you
                don{`'`}t agree with this, please stop using the Services and
                uninstall any downloaded applications related to our Services.
                You can find our Privacy Policy here: Privacy Policy.
                <p />
                <br />
                {`"`}Personal Information{`"`} refers to any data, whether
                accurate or not, that can be utilized to identify you (either
                alone or in combination). This may include but is not limited
                to:
                <ul className="list-disc space-y-2 p-4">
                    <li>Your full name</li>
                    <li>Email ID.</li>
                    <li>Geolocation data.</li>
                    <li>Telephone number.</li>
                    <li>Fax number.</li>
                    <li>
                        Banking details and credit references (if applicable).
                    </li>
                    <li>Venatronics Account Number; and</li>
                    <li>Credit or debit card details.</li>
                </ul>
            </div>
            <div>
                <h1>1. CHANGES TO THIS PRIVACY POLICY</h1>
                <div className="pl-6">
                    We maintain the discretion to update and modify this Privacy
                    Policy whenever necessary. Any modifications will become
                    operative as soon as they are posted on our website. By
                    continuing to use our Services under the applicable laws,
                    you acknowledge and consent to any Privacy Policy changes.
                    If the alterations are substantial, we may also send
                    additional notifications to your registered email address.
                </div>
            </div>
            <div>
                <h1>2. HOW WE COLLECT INFORMATION</h1>
                <ul className="space-y-4 pl-6">
                    <li className="list-inside list-disc">
                        <b className="pb-2 text-lg">Information You Give Us</b>
                        <div className="py-2">
                            The Personal Information we gather through our
                            Services might come directly from you. For instance,
                            we may collect Personal Information when you
                            register or use our Services, subscribe to our
                            updates, engage with our Services, participate in
                            promotional activities, apply for job positions, or
                            communicate with us via the Services, including
                            using an installed application on a device. You have
                            the option to submit additional information to us
                            voluntarily through our Services, which may include
                            Personal Information. However, you bear sole
                            responsibility for your Personal Information in
                            cases where we have neither collected such
                            information nor asked you to provide it. Please note
                            that data that has been de-identified or Personal
                            Information that has been “de-identified” may no
                            longer be subject to this Privacy Policy. We and our
                            Service Providers (defined below) have the right to
                            treat it as non-Personal Information and may utilize
                            it without any obligation to you unless such usage
                            is prohibited by relevant laws
                        </div>
                    </li>
                    <li className="list-inside list-disc">
                        <b className="pb-2 text-lg">
                            Automatically Collected Information from Your Use of
                            Our Services
                        </b>
                        <div className="py-2">
                            Both we and our Service Providers gather data about
                            the Services you utilize and how you use them. This
                            information, collected automatically via your
                            device, includes IP address; device identifier, Ad
                            ID, browser type; characteristics of your operating
                            system; data regarding your use of our Services; and
                            information pertaining to hardware connected to the
                            network (e.g., computer or mobile device) — this is
                            termed {`"`}Usage Information{`"`}. In cases where
                            Usage Information is deemed Personal Information
                            under relevant law or is merged with Personal
                            Information, we will manage such information as
                            Personal Information as outlined in this Privacy
                            Policy. The strategies we and our Service Providers
                            use to gather Usage Information include:
                            <ul className="list-disc space-y-2 py-4 pl-4">
                                <li>
                                    <b>Log Information:</b> We accumulate data
                                    regarding your use of our Services, such as
                                    IP address, browser type, Internet service
                                    provider, referring/exit pages, operating
                                    system, cookies that may uniquely identify
                                    your browser or your account, among other
                                    data, storing it in log files.
                                </li>
                                <li>
                                    <b>
                                        Information Gathered by Cookies and
                                        Other Tracking Technologies:
                                    </b>{' '}
                                    We and our Service Providers may employ
                                    cookies or other tracking technologies (
                                    {'"'}
                                    Tracking Technologies{'"'}) to collect and
                                    store data about your interactions with our
                                    Services, including information regarding
                                    your browsing and purchasing behavior.
                                    Additional details about how we use cookies
                                    are available in our Cookie Policy.
                                </li>
                            </ul>
                            By disclosing the presence of Tracking Technologies
                            and offering choices regarding them as explained in
                            Section 13, we aim to ensure that your consent to
                            their use is informed in a meaningful manner.
                        </div>
                    </li>
                    <li className="list-inside list-disc">
                        <b className="pb-2 text-lg">
                            Personal Information Collected from Other Sources
                        </b>
                        <div className="py-2">
                            We may obtain your Personal Information from various
                            sources including public databases, marketing
                            partners we jointly collaborate with, and social
                            media platforms. This information may be merged with
                            the data we collect from you. If such information
                            from third parties is combined with the Personal
                            Information, we have directly collected from you, we
                            will consider the consolidated information as
                            Personal Information. However, please note that we
                            cannot be held accountable for the accuracy of the
                            information provided by these third parties or their
                            operational practices.
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h1>3. HOW WE USE INFORMATION WE COLLECT</h1>
                <div className="pl-6">
                    We, along with our Service Providers, may utilize your
                    information to fulfill several objectives:
                    <ul className="list-disc space-y-2 p-4">
                        <li>
                            We aim to offer, preserve, safeguard, and enhance
                            our Services, develop new services, and ensure the
                            protection of VENATRONICS and our users.
                        </li>
                        <li>
                            We strive to facilitate, manage, customize, and
                            augment your online experience
                        </li>
                        <li>
                            We respond to your inquiries and meet your requests
                            such as dispatching newsletters, brochures,
                            catalogs, and emails.
                        </li>
                        <li>
                            For our organizational requirements such as data
                            examination, audits, monitoring, and prevention of
                            fraud, refinement, enhancement, or modification of
                            our Services, identifying usage patterns, and
                            functioning and expanding our business operations;
                            and
                        </li>
                        <li>
                            We deliver advertisements and communicate with you
                            about products, services, offers, promotions,
                            rewards, and events that we think might be relevant
                            to you (for more information about managing these
                            communications, refer to Section 13).
                        </li>
                    </ul>
                    <div className="py-2 font-bold">Marketing Purposes</div>
                    For users based in the United States, we might utilize your
                    Personal Information for the purpose of direct marketing.
                    However, if you are a user from a country other than the
                    U.S., we will refrain from using your Personal Information
                    for direct marketing unless we have obtained your explicit
                    consent. As a user from outside the U.S., you possess the
                    right to withdraw from direct marketing. You can ask us to
                    discontinue using your data for such marketing purposes at
                    any time, free of charge.
                </div>
            </div>
            <div>
                <h1>4. HOW WE SHARE INFORMATION</h1>
                <div className="pl-6">
                    Our representatives, vendors, advisors, marketing support
                    entities, and other service associates (collectively known
                    as {`"`}Service Providers{`"`}) might obtain, or be granted
                    access to, your data, which includes Personal Information
                    and Usage Information, in relation to the services they
                    provide on our behalf. These Service Providers might be
                    based in nations other than where you reside. These Service
                    Providers are barred from using your Personal Information
                    for any reason other than to offer their support, although
                    we may allow them to use anonymized data or collective
                    information which does not personally identify you or any
                    other user of the Services (for instance, we may consolidate
                    Personal Information to compute the percentage of our users
                    who belong to a specific telephone area code). We also
                    reserve the right to share information about you under the
                    following circumstances:
                    <div className="py-2 font-bold">
                        As needed, for the following reasons:
                    </div>
                    <ul className="list-decimal space-y-2 pl-4">
                        <li>to adhere to legal procedures.</li>
                        <li>
                            to answer requests from public and governmental
                            bodies, including those outside your country of
                            residence to fulfill national security or law
                            enforcement needs.
                        </li>
                        <li>to apply our terms and conditions.</li>
                        <li>
                            to safeguard our operations and uphold our rights,
                            privacy, safety, or property, as well as that of you
                            or others; and
                        </li>
                        <li>
                            to allow us to seek possible remedies or limit the
                            damages that we might incur.
                        </li>
                    </ul>
                    <p />
                    <br />
                    Alongside our affiliates for internal organizational
                    purposes. For instance, managing your orders, meeting your
                    demands, providing customer service, and enhancing our
                    products.
                    <p />
                    <br />
                    Alongside our subsidiaries, affiliates, business associates,
                    and other third parties for their individual organizational
                    needs. For instance, to enhance their products and services;
                    and
                    <p />
                    <br />
                    In the context of negotiations involving the restructuring,
                    merger, sale, joint venture, assignment, transfer, or other
                    distribution of all or a portion of our business, assets, or
                    stock (including in connection with any bankruptcy or
                    similar proceedings), your information may be disclosed to a
                    third party entity.
                    <p />
                    <br />
                    When VENATRONICS employs the services of third-party
                    providers and needs to share Personal Information with them
                    to facilitate those services, VENATRONICS ensures these
                    providers manage Personal Information in a way that aligns
                    with this Privacy Policy. Furthermore, where relevant,
                    VENATRONICS is accountable for ensuring these third parties
                    process EU Personal Information in accordance with the
                    Privacy Shield Principles detailed below (see Section 15)
                    and/or the General Data Protection Regulation or other
                    relevant laws.
                </div>
            </div>
            <h2>Aggregated Information</h2>
            <div>
                Without restricting the previously mentioned, at our sole
                discretion, we may share collective data that does not
                personally recognize you or anonymized information about you
                with third parties or affiliated entities for any objective.
            </div>

            <h2>Sharing for Marketing Purposes</h2>
            <div className="space-y-4">
                <div>
                    If you are a user based in the U.S., your Personal
                    Information may be shared with third parties for the purpose
                    of direct marketing. Additional rights are available to
                    residents of California, as detailed in Section 14. However,
                    if you are a user from outside the U.S., your Personal
                    Information will not be shared with third parties for direct
                    marketing purposes unless we have obtained your explicit
                    approval. Non-U.S. users have the privilege to opt-out from
                    direct marketing and can request us to stop using their data
                    for such marketing purposes at any given time without any
                    charges.
                </div>
                <div>
                    <h2>1. SWEEPSTAKES, CONTESTS, AND PROMOTIONS</h2>
                    We may present sweepstakes, competitions, and other
                    promotional activities (each referred to as a {`"`}Promotion
                    {`"`}), which may be co-sponsored or provided by third
                    parties, and which may necessitate the submission of
                    Personal Information. If you willingly participate in a
                    Promotion, your Personal Information may be shared with
                    third parties for management purposes and as mandated by law
                    (for instance, in a list of winners). By participating in a
                    Promotion, you consent to the official rules that govern
                    that specific Promotion, and, unless restricted by
                    applicable law, permit the sponsor and/or other entities to
                    utilize your name, voice, and/or image in promotional or
                    marketing materials.
                </div>
                <div>
                    <h2>2. INFORMATION YOU DISCLOSE PUBLICLY OR TO OTHERS</h2>
                    The Services may allow you to publish or submit written
                    material, user profiles, audio or visual recordings,
                    computer graphics, images, data, or other types of content,
                    inclusive of Personal Information (collectively referred to
                    as “User Content”). If you decide to submit User Content to
                    any public section of our Services, your User Content will
                    be deemed “public” and can be accessed by anyone, including
                    us, and is not governed by this Privacy Policy, allowing it
                    to be used to the maximum extent permissible under
                    applicable law. We advise you to exercise discretion when
                    deciding what information to disclose in such public
                    sections. Minors in California should refer to Section 11
                    for removal of specific posted content.
                </div>
                <div>
                    <h2>3. THIRD PARTY SERVICES AND SOCIAL FEATURES</h2>
                    Our Services may contain links to websites, locations,
                    platforms, or services managed by third parties ({`"`}Third
                    Party Service(s){`"`}). These Third-Party Services may
                    independently collect information about you through their
                    own cookies, web beacons, and other Tracking Technology, and
                    they may request Personal Information from you. Certain
                    functionalities within our Services allow for interactions
                    that you initiate between our Services and specific
                    Third-Party Services, like third-party social networks,
                    termed as “Social Features.” Social Features could include
                    actions such as {`"`}liking{`"`} or {`"`}sharing{`"`} our
                    content and linking our Service to a Third-Party Service. If
                    you utilize Social Features, and potentially other
                    Third-Party Services, information that you post or provide
                    access to could be publicly displayed either on our Services
                    or on the Third-Party Service you use. Similarly, if you
                    post information on a Third-Party Service that references
                    our Services (for instance, by using a hashtag associated
                    with VENATRONICS in a tweet or status update), your post
                    might be utilized in association with our Services.
                    Furthermore, both VENATRONICS and the third party may gain
                    access to specific information about you and your use of our
                    Services and the Third-Party Service. If we amalgamate
                    information from Third Party Services with Personal
                    Information that we gather directly from you on the
                    Services, we will regard the combined information as
                    Personal Information under this Privacy Policy.
                    <div className="py-2 font-bold">
                        Third Party Responsibility
                    </div>
                    The data collected and held by third parties remains subject
                    to their own privacy practices, including whether they
                    persist in sharing information with us, the kinds of
                    information shared, and your options regarding what is
                    visible to others on Third Party Services. We hold no
                    responsibility for the collection, usage, and disclosure
                    policies and practices (including the data security
                    practices) of any other organization, this includes any
                    Personal Information you reveal to other organizations
                    through or in association with our social media Pages. We do
                    not endorse or make any representations about the policies
                    or business conduct of any third parties or Third-Party
                    Services, and we strongly advise you to acquaint yourself
                    with and review their privacy policies and terms of use.
                </div>
                <div>
                    <h2>
                        4. ADVERTISING, ANALYTICS SERVICES, AND ONLINE TRACKING
                    </h2>
                    We may employ third-party advertising companies to display
                    ads on our behalf on the Services and/or on Third Party
                    Services, as well as to deliver analytics services regarding
                    the use of our Services and the performance of our ads and
                    content on Third Party Services. Additionally, we may
                    participate in online advertising networks and exchanges,
                    which display relevant ads to our Service visitors, both on
                    our Services and on Third Party Services, as well as outside
                    our Services, based on your interests as reflected in your
                    browsing patterns on the Services and certain Third-Party
                    Services. These organizations might employ cookies and other
                    Tracking Technologies to automatically gather information
                    about you and your actions, such as assigning a unique
                    identifier to your device and linking that to your online
                    activities on and off our Services. We might utilize this
                    information to analyze and track data, gauge the popularity
                    of specific content, deliver advertising and content
                    tailored to your interests on the Services and Third-Party
                    Services, and gain a better understanding of your online
                    behavior.
                    <div className="py-2 font-bold">
                        Online Behavioral Advertising
                    </div>
                    Some details about your browsing activity on the Services
                    and certain Third-Party Services could be gathered over time
                    and across numerous services and then shared with third
                    parties to provide you with ads and/or other content on the
                    Services and certain Third-Party Services. VENATRONICS may
                    receive information about Third Party Services that you have
                    visited and utilize this data for marketing initiatives—a
                    process sometimes referred to as {`"`}(re)-targeting,{`"`}
                    {`"`}interest-based advertising,{`"`} and {`"`}online
                    behavioral advertising.{`"`}
                    <div className="py-2 font-bold">Do Not Track</div>
                    Your web browser settings may provide the option to send a
                    {`"`}Do Not Track{`"`} signal to the online services you
                    visit. It is important to note that there is no universally
                    agreed-upon definition for {`"`}Do Not Track{`"`} in this
                    context, as different industry participants have varying
                    interpretations. Similar to many other online services, we
                    currently do not modify our practices based on receiving a
                    {`"`}Do Not Track{`"`} signal from a visitor{`'`}s browser.
                    For more information about {`"`}Do Not Track,{`"`} you can
                    visit
                    <ALink url=" http://www.allaboutdnt.com" />
                </div>
                <div>
                    <h2>5. DATA SECURITY</h2>
                    We strive to implement reasonable technical and
                    organizational security measures to safeguard your
                    information against loss, theft, misuse, unauthorized
                    access, disclosure, alteration, or destruction. Furthermore,
                    VENATRONICS will retain your Personal Information only for
                    as long as necessary to fulfill the purposes outlined in
                    this policy. However, it is important to note that no data
                    transmission or storage system can be entirely secure, and
                    we cannot provide a guarantee of the absolute security of
                    your information collected through our Services. Your
                    Personal Information is stored on servers located in the
                    U.S., U.K., and Hong Kong, managed with the assistance of a
                    third-party data storage provider.
                </div>
                <div>
                    <h2>6. INTERNATIONAL TRANSFER</h2>
                    Venatronics LLC and its listed US subsidiaries adhere to the
                    Privacy Shield Framework, which is established by the U.S.
                    Department of Commerce in collaboration with the European
                    Commission. This framework governs the collection, use, and
                    retention of Personal Information received from the European
                    Union. As part of the Privacy Shield, Venatronics LLC is
                    subject to the authority and enforcement powers of the
                    Federal Trade Commission. VENATRONICS undergoes an annual
                    certification process to demonstrate compliance with the
                    Privacy Shield Principles, which include notice, choice,
                    accountability for onward transfer, security, data integrity
                    and purpose limitation, access, and recourse, enforcement,
                    and liability. All U.S. entities and subsidiaries listed in
                    our Privacy Shield certification record adhere to these
                    principles. For more information about the EU-U.S. Privacy
                    Shield Framework, please visit{` `}
                    <ALink url="https://www.privacyshield.gov/EU-US-Framework" />
                    . To view VENATRONICS{`'`}s certification, please visit{` `}
                    <ALink url="https://www.privacyshield.gov/list" />. If the
                    Privacy Shield is invalidated, any information pertaining to
                    EU residents will only be transferred in accordance with
                    approved transfer mechanisms, such as the model contract
                    clauses. As a U.S.-based company, we operate under U.S. law
                    regarding the information we collect from the U.S. If you
                    access our Services from outside the U.S., please note that
                    the information collected through the Services may be
                    transferred to, processed, stored, and used in the U.S. Your
                    Personal Information may also be transferred to, processed,
                    stored, and used in other jurisdictions where we have
                    subsidiaries, affiliates, or service providers. The data
                    protection laws in these jurisdictions may differ from those
                    of your country of residence. By using our Services or
                    providing any information, you consent to the transfer,
                    processing, usage, sharing, and storage of your information,
                    including Personal Information, in these jurisdictions, as
                    described in this Privacy Policy.
                </div>
                <div>
                    <h2>7. CHILDREN’S PRIVACY</h2>
                    Our Services are designed for adult users and are not
                    specifically aimed at individuals under the age of thirteen
                    (13). If you are a child under the age of thirteen (13), you
                    are prohibited from using the Services and should refrain
                    from providing any personal information about yourself to
                    us.
                    <div className="py-2 font-bold">COPPA</div>
                    We are committed to not knowingly collecting any Personal
                    Information from children under the age of thirteen. If we
                    become aware that we have received information from a user
                    under the age of thirteen, we will promptly delete that
                    information in compliance with the Children{`'`}s Online
                    Privacy Protection Act (COPPA). If you are a parent or
                    guardian and believe that your child under the age of
                    thirteen (13) has provided us with Personal Information
                    without the necessary consent as required by COPPA, please
                    contact us at{` `}
                    <AMailTo email="compliance@venatronics.com" />.
                </div>
                <div>
                    <h2>8. ACCESSING AND CHANGING INFORMATION</h2>
                    VENATRONICS offers web pages or other mechanisms that allow
                    you to update or correct certain Personal Information you
                    have provided to us. Access Rights Users from the European
                    Union, Singapore, Hong Kong, Japan, New Zealand, Mexico, and
                    Australia have the right to access their Personal
                    Information, request corrections and/or deletions, and
                    object to the use of their Personal Information for specific
                    purposes, subject to legal exceptions. These users are also
                    entitled to request information regarding the origin of
                    their Personal Information, the recipients or types of
                    recipients who have received their Personal Information, the
                    purpose for which their Personal Information is being
                    stored, and the ways in which their Personal Information has
                    been or may have been used or disclosed by us within one
                    year prior to the date of the request. To make such a
                    request, please send a written request by email to{' '}
                    <AMailTo email="compliance@venatronics.com" /> or by mail to
                    Venatronics LLC, 21921 Rimhurst Dr, Lake Forest, CA 92630.
                    To ensure privacy protection, we will require evidence of
                    your identity before granting access to or making changes to
                    your information. No fees will be charged for complying with
                    such requests. Changes and Deletions We will make reasonable
                    efforts to implement requested changes in our active
                    databases as soon as possible (while retaining prior
                    information as permitted by applicable law). However, please
                    note that it may not always be feasible to completely remove
                    or delete all your information or public postings from our
                    databases (refer to Section 11 for California minors), and
                    residual data may remain on backup media or for other
                    legitimate reasons. We may also keep cached or archived
                    versions of your information for a designated period.
                    Individuals may also exercise the right to be forgotten by
                    emailing{` `}
                    <AMailTo email="reminder@venatronics.com" />.
                </div>
                <div>
                    <h2>
                        9. CHOICES: TRACKING AND COMMUNICATIONS OPTIONS. Please
                        refer to our{` `}
                        <Link
                            href="/cookie-policy"
                            className="text-cyan-600 dark:text-cyan-400"
                        >
                            Cookie Policy
                        </Link>
                        .
                    </h2>
                    <div className="space-y-4 py-4 pl-6">
                        <div>
                            <h2>A. Tracking Technologies Generally</h2>
                            Typically, regular cookies can be disabled or
                            deleted using tools provided by most mainstream web
                            browsers. In some cases, you can also choose to
                            block cookies in the future by adjusting specific
                            settings. It{`'`}s important to note that different
                            browsers offer varying functionalities and options,
                            so you may need to configure them individually.
                            Please be aware that disabling or removing cookies
                            may result in certain parts of our Services not
                            functioning properly. Additionally, when you revisit
                            our Services, your ability to control browser-based
                            Tracking Technologies is dependent on your browser
                            settings and any limitations they may have. For our
                            mobile applications, you can prevent the collection
                            of information by uninstalling the app. Furthermore,
                            you may have the option to exercise specific privacy
                            choices, such as enabling or disabling location
                            identification services, by adjusting the
                            permissions on your mobile device.
                        </div>
                        <div>
                            <h2>B. Analytics and Interest-Based Advertising</h2>
                            Certain companies may take part in the Digital
                            Advertising Alliance (DAA) AdChoices Program,
                            displaying an Advertising Option Icon for
                            interest-based ads. This icon provides a link to an
                            opt-out tool that enables you to make certain
                            choices regarding targeted advertising. To find out
                            more about the DAA AdChoices Program, you can visit
                            {` `}
                            <ALink url="http://www.youradchoices.com/" />. For
                            mobile applications, you can access the opt-out
                            program at{' '}
                            <ALink url="http://www.aboutads.info/appchoices" />.
                            <p />
                            <br />
                            Moreover, specific advertising networks and
                            exchanges may participate in the Network Advertising
                            Initiative (NAI), which offers a tool allowing
                            consumers to opt-out of targeted advertising
                            delivered by NAI members{`'`} ad networks. To learn
                            more about opting out of targeted advertising or to
                            utilize the NAI tool, you can visit{` `}
                            <ALink url="http://www.networkadvertising.org/choices/" />
                            .
                            <p />
                            <br />
                            Please note that even if you opt-out of certain
                            types of targeted advertising, you may still receive
                            non-targeted ads. We are not responsible for the
                            effectiveness or compliance of any third-party
                            opt-out options or programs, nor can we guarantee
                            the accuracy of their statements about their
                            programs. However, we support the ad industry{`'`}s
                            2009 Self-regulatory Principles for Online
                            Behavioral Advertising (
                            <ALink url="http://www.iab.net/media/file/ven-principles-07-01-09.pdf" />
                            ), and we expect that the ad networks we directly
                            engage with for serving you interest-based ads will
                            adhere to these principles as well, although we
                            cannot guarantee their compliance.
                        </div>
                        <div>
                            <h2>C. Communications</h2>
                            You have the option to opt-out of receiving
                            promotional communications (such as emails or text
                            messages) from us at any time by following these
                            steps: (i) To unsubscribe from promotional emails,
                            you can click on the provided unsubscribe link in
                            the emails or modify your communication preferences
                            by logging into your account; (ii) To stop receiving
                            text messages, you can follow the instructions given
                            in the text messages and reply with the word {`"`}
                            STOP{`"`}. Please keep in mind that your opt-out
                            request is specific to the email address or phone
                            number used and will not affect any subsequent
                            subscriptions. If you choose to opt-out of only
                            certain communications, you may still receive other
                            subscriptions. Please note that even if you opt-out
                            of receiving promotional communications, we may, as
                            permitted by applicable law, continue to send you
                            non-promotional communications related to your
                            account, transactions, service, or our ongoing
                            business relationship.
                        </div>
                        <div>
                            <h2>D. Mobile Applications</h2>
                            Our mobile applications have the capability to send
                            you notifications, which may consist of alerts,
                            sounds, and icon badges. These notifications,
                            including both operational and promotional messages
                            about products, services, and offers that may be
                            relevant to you, can be customized in the settings.
                            Like email communications, if you choose to opt-out
                            of receiving promotional notifications, you may
                            still receive non-promotional push notifications,
                            such as those related to your use of the
                            applications or our ongoing business relationship.
                        </div>
                    </div>
                </div>
                <div>
                    <h2>10. CALIFORNIA PRIVACY RIGHTS</h2>
                    <div className="py-2 font-bold">Scope</div>
                    Section 14 of the policy is specifically relevant to the
                    Personal Information of individuals who are residents of the
                    U.S. state of California and function as consumers ({`"`}
                    California consumers{`"`}).
                    <p />
                    <br />
                    The term {`"`}California consumer{`"`} excludes individuals
                    who are acting in their capacity as human resources, such as
                    employees, job applicants, directors, and contract workers
                    of VENATRONICS (referred to collectively as {`"`}HR
                    individuals{`"`}). It also does not include individuals who
                    are acting as emergency contacts, dependents, or
                    beneficiaries of HR individuals. Additionally, individuals
                    who are acting as employees or agents of a business engaged
                    in a transaction with VENATRONICS are not considered {`"`}
                    consumers{`"`}
                    under this definition.
                    <p />
                    <br />
                    Section 14 pertains to all Personal Information of
                    California consumers, regardless of whether it was
                    collected, disclosed for business purposes, or sold by
                    VENATRONICS, whether through online or offline channels.
                    <p />
                    <br />
                    Now, let us discuss how we gather the Personal Information
                    of California Consumers
                </div>
            </div>
            <h1>Sharing for Marketing Purposes</h1>

            <div>
                <h2>Identifiers</h2>
                This category encompasses various pieces of information, which
                include:
                <ul className="list-inside list-decimal space-y-2 py-2">
                    <li>Real name</li>
                    <li>Postal address</li>
                    <li>Telephone and fax number(s)</li>
                    <li>Internet Protocol (IP) address</li>
                    <li>Email address</li>
                    <li>VENATRONICS account number</li>
                </ul>
            </div>
            <div>
                <h2>
                    Internet or other electronic network activity information
                </h2>
                This category encompasses several types of information, which
                include:
                <ul className="list-inside list-decimal space-y-2 py-2">
                    <li>Device identifier</li>
                    <li>Browser information</li>
                    <li>Operating system characteristics</li>
                    <li>Internet service provider</li>
                    <li>Referring/exit pages</li>
                    <li>
                        Information pertaining to your engagement with an
                        internet website, application, or advertisement.
                    </li>
                    <li>Cookies</li>
                    <li>Web beacons</li>
                    <li>Log files</li>
                    <li>Other online behaviors</li>
                </ul>
            </div>
            <div>
                <h2>Commercial information</h2>
                This category includes several types of information, such as:
                <ul className="list-inside list-decimal space-y-2 py-2">
                    <li>Interest in products and services</li>
                    <li>Inquiries made regarding products and services</li>
                    <li>Purchases of products and services</li>
                </ul>
            </div>
            <h2>Product and service usage information</h2>
            <h1>
                Categories of Third Parties with Which VENATRONICS Shared That
                Personal Information
            </h1>
            <div className="space-y-2">
                <div>
                    <b>Affiliated companies:</b>
                    {` `}
                    Personal Information may be shared with VENATRONICS{`'`}s
                    subsidiaries, parents, and other affiliated companies for
                    various business purposes.
                </div>
                <div>
                    <b>Compliance with laws and protection of rights:</b>
                    {` `}
                    VENATRONICS discloses Personal Information to government
                    agencies, law enforcement authorities, and other parties as
                    required by law and when necessary to protect the rights,
                    property, or safety of VENATRONICS, its subsidiaries or
                    affiliates, employees, customers, and users.
                </div>
                <div>
                    <b>Vendors and Service Providers:</b>
                    {` `}
                    Personal Information may be shared with vendors and service
                    providers as necessary to fulfill business and commercial
                    purposes mentioned earlier.
                </div>
                <div>
                    <b>Business transactions:</b>
                    {` `}
                    VENATRONICS discloses Personal Information to a third party
                    in connection with or during negotiations of any
                    reorganization, merger, sale, joint venture, assignment,
                    transfer, or other disposition of all or any portion of its
                    business, assets, or stock, including in connection with
                    bankruptcy or similar proceedings.
                </div>
            </div>

            <div>
                <h3>
                    1. Your California Privacy Rights and How to Exercise Them
                </h3>
                <ul className=" list-disc space-x-2 py-2 pl-8">
                    <li>
                        Your California Privacy Rights
                        <ul className="list-disc pl-4">
                            <li>
                                Right to Know: California consumers possess the
                                privilege to submit a verifiable request,
                                allowing them to be informed about the Personal
                                Information we collect, use, disclose, and sell.
                            </li>
                            <li>
                                Right to Delete: California consumers hold the
                                right to submit a verifiable request for the
                                deletion of their Personal Information that we
                                have collected or currently maintain.
                            </li>
                            <li>
                                Right to Opt Out of Sale: California consumers
                                retain the right to opt out of the sale of their
                                Personal Information. For California consumers
                                below the age of 16, the sale of their Personal
                                Information requires opt-in consent from either
                                themselves or their parent or guardian. It is
                                important to note that VENATRONICS has not sold
                                California consumers{`'`} Personal Information
                                within the past 12 months and will continue to
                                refrain from doing so.
                            </li>
                        </ul>
                    </li>
                    <li>
                        How to Exercise Your Rights
                        <br />
                        We will address requests in compliance with relevant
                        laws, provided we can verify the identity of the
                        individual making the request. California consumers can
                        exercise their rights to know and delete their
                        information through the following methods:
                        <ul className="list-disc pl-4">
                            <li>
                                Completing the online request form available at
                                this link.
                            </li>
                            <li>
                                Contacting us via telephone at: 1-855-326-4757.
                            </li>
                            <li>
                                Reaching out to us via email at:{` `}
                                <AMailTo email="compliance@venatronics.com" />.
                            </li>
                        </ul>
                    </li>
                    <li>
                        How We Will Verify Your Request
                        <br />
                        The verification processes we employ for confirming your
                        identity when you submit a request to know or a request
                        to delete are explained below. The specific process
                        utilized depends on the manner and purpose of the
                        request, and it is important to note that requests made
                        through a password-protected account may not be
                        applicable in all situations.
                        <ul className="list-disc py-2 pl-4">
                            <li>
                                Requests Through Your Password-Protected
                                Account: If you have an existing
                                password-protected account with us that predates
                                your request, we will consider the submission of
                                your request through your account as sufficient
                                verification of your identity. However, before
                                disclosing your Personal Information in response
                                to a request to know or deleting your Personal
                                Information in response to a request to delete,
                                we will require you to authenticate yourself
                                again.
                            </li>
                        </ul>
                        It is your responsibility to safeguard the security of
                        your account{`'`}s login credentials. Please refrain
                        from sharing your login credentials with anyone. In the
                        event that we suspect fraudulent or malicious activity
                        associated with your account, we will not proceed with a
                        request to know or a request to delete until we can
                        confirm, through additional verification procedures,
                        that the request indeed originates from you.
                        <ul className="list-disc py-2 pl-4">
                            <li>
                                Requests Other Than Through A Password-Protected
                                Account: If you make a request through means
                                other than a password-protected account that was
                                created prior to your request, the verification
                                process we employ will vary based on the
                                specific nature of your request. The following
                                describes the verification process depending on
                                the type of request:
                                <ul className="list-decimal py-2 pl-4">
                                    <li>
                                        Requests to Know Categories of Personal
                                        Information: When you submit a request
                                        to know the categories of Personal
                                        Information collected, sources, sales,
                                        or VENATRONICS{`'`}s business or
                                        commercial purposes for the use of your
                                        Personal Information, we will compare at
                                        least two or more data points provided
                                        by you in your request. Alternatively,
                                        we may compare the information you
                                        provide in response to our request for
                                        verification against the information
                                        already present in our records, which we
                                        have deemed reliable for identity
                                        verification purposes. Examples of
                                        relevant data points may include your
                                        name, email address, zip code, or
                                        information related to products or
                                        services you have previously purchased
                                        from us.
                                    </li>
                                    <li>
                                        Requests for Copies or Requests to
                                        Delete Personal Information: The method
                                        we employ to verify your identity will
                                        vary based on the sensitivity, as
                                        determined by VENATRONICS, of the
                                        Personal Information you are requesting
                                        to delete or obtain copies of specific
                                        pieces of. For Personal Information of
                                        lower sensitivity, we will require a
                                        matching of two data points, as
                                        described in Point No. 1 above. However,
                                        for Personal Information deemed more
                                        sensitive, we will require a matching of
                                        three data points along with a signed
                                        declaration.
                                    </li>
                                    <div className="py-2">
                                        We have incorporated the following
                                        supplementary procedures for verifying
                                        the identity of individuals making
                                        requests:
                                    </div>
                                    <li>
                                        In the event that we are unable to
                                        verify your identity using the
                                        aforementioned processes, we may request
                                        additional verification information from
                                        you. Should this occur, we will securely
                                        and permanently delete the verification
                                        information you provide once the
                                        verification process is completed. We
                                        will not utilize this information for
                                        any purpose other than the verification
                                        process itself.
                                    </li>
                                    <li>
                                        If we are unable to verify your identity
                                        to a satisfactory level of certainty in
                                        order to address your request, we will
                                        promptly inform you and provide an
                                        explanation as to why we cannot verify
                                        your identity.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <h3>2. Authorized Agents</h3>
                <div className="py-2 pl-5">
                    You have the option to appoint an authorized agent to
                    exercise your right to know or your right to delete by
                    completing and submitting the {`"`}Authorized Agent
                    Designation{`"`}
                    form to us. To obtain the designation form, please contact
                    us at compliance@venatronics.com.
                    <p />
                    <br />
                    If an authorized agent submits a request to know or a
                    request to delete on your behalf, they must include either
                    (a) a valid power of attorney under California law or (b) a
                    document signed by you that grants the authorized agent the
                    authority to submit the request on your behalf.
                    Additionally, we may request that you follow the applicable
                    identity verification process described above.
                </div>
            </div>
            <div>
                <h3>3. VENATRONICS’s Non-Discrimination Policy</h3>
                <div className="py-2 pl-5">
                    California consumers have the right to be free from
                    discriminatory treatment by VENATRONICS for exercising their
                    privacy rights under the California Consumer Privacy Act,
                    and VENATRONICS is committed to not engaging in any
                    discriminatory practices. However, it is important to note
                    that VENATRONICS may apply a different price, rate, or offer
                    a different level or quality of goods or services if such
                    differences are reasonably related to the value derived from
                    the California consumer{`'`}s Personal Information. In such
                    cases, VENATRONICS will provide consumers with any legally
                    mandated notice to ensure transparency.
                </div>
            </div>
            <div>
                <h3>4. Use of The Websites by Minors</h3>
                <div className="py-2 pl-5">
                    If any residents of California who are under the age of
                    eighteen (18) and have registered to use our Services have
                    posted content or information on the Services, they have the
                    option to request its removal. This can be done by
                    contacting us at {` `}
                    <AMailTo email="compliance@venatronics.com" /> or by sending
                    a letter to Venatronics LLC, 21921 Rimhurst Dr, Lake Forest,
                    CA 92630. The request should include specific details
                    regarding the location of the content or information. We
                    will make reasonable and sincere efforts to either remove
                    the post from public view or anonymize it in a way that
                    prevents individual identification of the minor. It is
                    important to note that this removal process cannot guarantee
                    complete or comprehensive removal. For example, third
                    parties may have republished or archived the content through
                    search engines and other platforms that are beyond our
                    control.
                </div>
            </div>
            <div>
                <h3>
                    5. Right to Information About Disclosures of Personal
                    Information for Direct Marketing Purposes
                </h3>
                <div className="py-2 pl-5">
                    Under California{`'`}s {`"`}Shine the Light{`"`} law,
                    customers in California have the right to request certain
                    information regarding the sharing of their information with
                    third parties and, in some cases, affiliates, for the
                    purpose of direct marketing by those third parties and
                    affiliates. As a service provider for our U.S. users, there
                    may be instances where we choose to share certain
                    information collected from you on the Service with third
                    parties or affiliates for their own direct marketing
                    purposes. If you are a resident of California, you have the
                    option to opt-out of such future sharing by contacting us at{' '}
                    {` `}
                    <AMailTo email="compliance@venatronics.com" /> or by sending
                    a letter to Venatronics LLC, 21921 Rimhurst Dr, Lake Forest,
                    CA 92630. It{`'`}s important to note that we are only
                    obligated to respond to one request per customer per year,
                    and we are not required to respond to requests made through
                    channels other than the provided email address or mailing
                    address.
                </div>
            </div>
            <div>
                <h2>PRIVACY NOTICE FOR NON-U.S. JURISDICTIONS</h2>
                <div className="space-y-4">
                    <div>
                        <h2>Obligation to Provide Personal Information</h2>
                        <div>
                            EU individuals may need to provide Personal
                            Information to us on certain occasions as it is
                            necessary to enter into a contract or fulfill
                            contractual obligations. This includes situations
                            such as providing our products and services,
                            processing payments for the products and services
                            offered, and managing billing, shipping, and
                            delivery. While you have the freedom to withhold
                            your Personal Information, please note that without
                            this data, we will be unable to execute the contract
                            or provide you with our products and services.
                            <p />
                            <br />
                            When you engage in a purchase on or through our
                            Services, it is necessary to provide Personal
                            Information to ensure compliance with applicable tax
                            and legal requirements. While you have the choice to
                            withhold your Personal Information, please be aware
                            that without this data, we will be unable to provide
                            you with our products and services in accordance
                            with these obligations.
                        </div>
                    </div>
                    <div>
                        <h2>Automated Decision-Making</h2>
                        <div>
                            On occasion, we utilize the Personal Information of
                            EU individuals submitted through our Services for
                            automated decision-making processes. For instance,
                            we may display advertisements and send emails to you
                            that contain content automatically selected based on
                            the products or services you have previously engaged
                            with. However, it is important to note that we do
                            not employ the Personal Information of EU
                            individuals submitted through our Services for
                            automated decision-making, including profiling, that
                            could have legal consequences or significantly
                            impact them in a similar manner.
                        </div>
                    </div>
                    <div>
                        <h2>Legal Bases for Processing</h2>
                        We process your Personal Information based on your
                        consent and as required by law. Furthermore, we process
                        your Personal Information to fulfill the sales contract,
                        such as processing orders, payments, and providing you
                        with quotations for products and services upon your
                        request. We also process Personal Information based on
                        our legitimate interests, which include:
                        <ul className="list-disc space-y-2 py-2 pl-5">
                            <li>
                                <b>Research and Development:</b> Conducting
                                research on the usage of our products and
                                services and improving and developing new
                                offerings.
                            </li>
                            <li>
                                <b>Marketing and Advertising:</b> Within the
                                bounds permitted by applicable law, we use your
                                Personal Information regarding products and
                                services you have ordered or expressed interest
                                in to analyze your preferences and provide you
                                with information about other products and
                                services that we believe might interest you.
                            </li>
                            <li>
                                <b>Security:</b> Personal Information is
                                utilized for facility, network, and information
                                security purposes, including fraud prevention
                                and reporting suspected criminal activities. For
                                instance, in the event of fraud, a security
                                incident, or suspicion of criminal behavior, we
                                may examine Personal Information associated with
                                the incident to investigate and address the
                                matter, report to relevant authorities, and
                                prevent future occurrences.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Accuracy and Access to Personal Information</h2>
                        EU individuals have the right to request access to their
                        Personal Information in accordance with applicable law
                        in their home country. They may also request the
                        correction, amendment, or deletion of their Personal
                        Information if it is inaccurate or has been processed in
                        violation of the Privacy Shield Principles. VENATRONICS
                        will make reasonable efforts to fulfill such requests to
                        the extent required by applicable law. Users outside the
                        United States have the right to request that their
                        Personal Information not be processed for marketing
                        purposes. We will inform you in advance (before
                        collecting your information) if we intend to use your
                        information for such purposes or disclose it to any
                        third party for such purposes. You can exercise your
                        right to prevent such processing by selecting certain
                        options on the forms used to collect your information.
                        <p />
                        <br />
                        To exercise these rights, you can contact us at
                        {` `}
                        <AMailTo email="compliance@venatronics.com" /> or send a
                        letter to the addresses provided in Section 16 below.
                    </div>
                    <div>
                        <h2>
                            Right to Object to Processing for Direct Marketing
                            or Legitimate Interests
                        </h2>
                        EU individuals possess the right to object to the
                        processing of their Personal Information by VENATRONICS
                        for the purposes of direct marketing or legitimate
                        interests. To exercise this right, you can contact us at
                        {` `}
                        <AMailTo email="compliance@venatronics.com" /> or send a
                        letter to the addresses provided in Section 16 below.
                    </div>
                    <div>
                        <h2>Revocation of Consent</h2>
                        Users located outside the U.S. also retain the right to
                        withdraw their previously granted consent concerning the
                        use and sharing of their Personal Information. However,
                        it is essential to acknowledge that in certain
                        situations, immediate or complete execution of such a
                        request may not be possible due to legal obligations
                        that require us to continue using your Personal
                        Information. Additionally, it{`'`}s important to note
                        that revoking consent for certain purposes may impact
                        our ability to continue providing the services you have
                        requested. You can withdraw your consent at any time by
                        reaching out to us at
                        {` `}
                        <AMailTo email="compliance@venatronics.com" /> or by
                        sending a letter to the addresses provided in Section 16
                        below.
                    </div>
                    <div>
                        <h2>Accountability and Inquiries</h2>
                        If any EU individual is not satisfied with VENATRONICS
                        {`'`}s adherence to the EU-U.S. Privacy Shield or other
                        applicable legislation, they can reach out to us at
                        {` `}
                        <AMailTo email="compliance@venatronics.com" /> or send a
                        letter to the addresses provided in Section 16 below. In
                        the event that a complaint remains unresolved, the
                        individual agrees to attempt mediation, administered by
                        the International Centre for Dispute Resolution under
                        its Mediation Rules, before resorting to arbitration,
                        litigation, or any other dispute resolution process.
                        Details regarding the procedures and how to file a claim
                        at no cost can be found at:
                        {` `}
                        <ALink url="http://info.adr.org/safeharbor/" />.<p />
                        <br />
                        Should an EU individual remain dissatisfied, they have
                        the option to contact their national Data Protection
                        Authority in the country where they reside. VENATRONICS
                        has committed to cooperating and complying with
                        appropriate EU Data Protection Authorities and the
                        Department of Commerce to resolve such disputes. If the
                        individual meets the pre-arbitration requirements
                        specified in Annex I Part C of the EU-U.S. Privacy
                        Shield Framework, they may invoke binding arbitration as
                        per the procedures outlined in Annex I of the EU-U.S.
                        Privacy Shield Framework Principles, accessible here:
                        {` `}
                        <ALink url="https://www.privacyshield.gov/EU-US-Framework" />
                        .
                    </div>
                </div>
            </div>
            <div>
                <h2>CONTACT US</h2>
                If you have any requests regarding your Personal Information or
                if you have any inquiries concerning this Privacy Policy, please
                feel free to reach out to us at:
                <p />
                <br />
                Venatronics LLC,
                <br />
                21921 Rimhurst Dr, Lake Forest, CA 92630
                <br />
                <AMailTo email="compliance@venatronics.com" />
            </div>
        </div>
    );
}
