# `integrationMicrosoftTeams` Submodule <a name="`integrationMicrosoftTeams` Submodule" id="@cdktf/provider-gitlab.integrationMicrosoftTeams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationMicrosoftTeams <a name="IntegrationMicrosoftTeams" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams gitlab_integration_microsoft_teams}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_microsoft_teams.IntegrationMicrosoftTeams;

IntegrationMicrosoftTeams.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .project(java.lang.String)
    .webhook(java.lang.String)
//  .branchesToBeNotified(java.lang.String)
//  .confidentialIssuesEvents(java.lang.Boolean)
//  .confidentialIssuesEvents(IResolvable)
//  .confidentialNoteEvents(java.lang.Boolean)
//  .confidentialNoteEvents(IResolvable)
//  .id(java.lang.String)
//  .issuesEvents(java.lang.Boolean)
//  .issuesEvents(IResolvable)
//  .mergeRequestsEvents(java.lang.Boolean)
//  .mergeRequestsEvents(IResolvable)
//  .noteEvents(java.lang.Boolean)
//  .noteEvents(IResolvable)
//  .notifyOnlyBrokenPipelines(java.lang.Boolean)
//  .notifyOnlyBrokenPipelines(IResolvable)
//  .pipelineEvents(java.lang.Boolean)
//  .pipelineEvents(IResolvable)
//  .pushEvents(java.lang.Boolean)
//  .pushEvents(IResolvable)
//  .tagPushEvents(java.lang.Boolean)
//  .tagPushEvents(IResolvable)
//  .wikiPageEvents(java.lang.Boolean)
//  .wikiPageEvents(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.webhook">webhook</a></code> | <code>java.lang.String</code> | The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential issue events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#id IntegrationMicrosoftTeams#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for issue events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.notifyOnlyBrokenPipelines">notifyOnlyBrokenPipelines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for wiki page events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.project"></a>

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#project IntegrationMicrosoftTeams#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.webhook"></a>

- *Type:* java.lang.String

The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#webhook IntegrationMicrosoftTeams#webhook}

---

##### `branchesToBeNotified`<sup>Optional</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.branchesToBeNotified"></a>

- *Type:* java.lang.String

Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#branches_to_be_notified IntegrationMicrosoftTeams#branches_to_be_notified}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.confidentialIssuesEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#confidential_issues_events IntegrationMicrosoftTeams#confidential_issues_events}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.confidentialNoteEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#confidential_note_events IntegrationMicrosoftTeams#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#id IntegrationMicrosoftTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.issuesEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#issues_events IntegrationMicrosoftTeams#issues_events}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.mergeRequestsEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#merge_requests_events IntegrationMicrosoftTeams#merge_requests_events}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.noteEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#note_events IntegrationMicrosoftTeams#note_events}

---

##### `notifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="notifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.notifyOnlyBrokenPipelines"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#notify_only_broken_pipelines IntegrationMicrosoftTeams#notify_only_broken_pipelines}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.pipelineEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#pipeline_events IntegrationMicrosoftTeams#pipeline_events}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.pushEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#push_events IntegrationMicrosoftTeams#push_events}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.tagPushEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#tag_push_events IntegrationMicrosoftTeams#tag_push_events}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.Initializer.parameter.wikiPageEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#wiki_page_events IntegrationMicrosoftTeams#wiki_page_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetBranchesToBeNotified">resetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetConfidentialIssuesEvents">resetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetConfidentialNoteEvents">resetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetIssuesEvents">resetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetMergeRequestsEvents">resetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetNoteEvents">resetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetNotifyOnlyBrokenPipelines">resetNotifyOnlyBrokenPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetPipelineEvents">resetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetPushEvents">resetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetTagPushEvents">resetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetWikiPageEvents">resetWikiPageEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBranchesToBeNotified` <a name="resetBranchesToBeNotified" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetBranchesToBeNotified"></a>

```java
public void resetBranchesToBeNotified()
```

##### `resetConfidentialIssuesEvents` <a name="resetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetConfidentialIssuesEvents"></a>

```java
public void resetConfidentialIssuesEvents()
```

##### `resetConfidentialNoteEvents` <a name="resetConfidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetConfidentialNoteEvents"></a>

```java
public void resetConfidentialNoteEvents()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetId"></a>

```java
public void resetId()
```

##### `resetIssuesEvents` <a name="resetIssuesEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetIssuesEvents"></a>

```java
public void resetIssuesEvents()
```

##### `resetMergeRequestsEvents` <a name="resetMergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetMergeRequestsEvents"></a>

```java
public void resetMergeRequestsEvents()
```

##### `resetNoteEvents` <a name="resetNoteEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetNoteEvents"></a>

```java
public void resetNoteEvents()
```

##### `resetNotifyOnlyBrokenPipelines` <a name="resetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetNotifyOnlyBrokenPipelines"></a>

```java
public void resetNotifyOnlyBrokenPipelines()
```

##### `resetPipelineEvents` <a name="resetPipelineEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetPipelineEvents"></a>

```java
public void resetPipelineEvents()
```

##### `resetPushEvents` <a name="resetPushEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetPushEvents"></a>

```java
public void resetPushEvents()
```

##### `resetTagPushEvents` <a name="resetTagPushEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetTagPushEvents"></a>

```java
public void resetTagPushEvents()
```

##### `resetWikiPageEvents` <a name="resetWikiPageEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.resetWikiPageEvents"></a>

```java
public void resetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationMicrosoftTeams resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_microsoft_teams.IntegrationMicrosoftTeams;

IntegrationMicrosoftTeams.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_microsoft_teams.IntegrationMicrosoftTeams;

IntegrationMicrosoftTeams.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_microsoft_teams.IntegrationMicrosoftTeams;

IntegrationMicrosoftTeams.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_microsoft_teams.IntegrationMicrosoftTeams;

IntegrationMicrosoftTeams.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationMicrosoftTeams.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationMicrosoftTeams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationMicrosoftTeams to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationMicrosoftTeams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationMicrosoftTeams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.branchesToBeNotifiedInput">branchesToBeNotifiedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.confidentialIssuesEventsInput">confidentialIssuesEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.confidentialNoteEventsInput">confidentialNoteEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.issuesEventsInput">issuesEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.mergeRequestsEventsInput">mergeRequestsEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.noteEventsInput">noteEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelinesInput">notifyOnlyBrokenPipelinesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.pipelineEventsInput">pipelineEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.pushEventsInput">pushEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.tagPushEventsInput">tagPushEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.webhookInput">webhookInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.wikiPageEventsInput">wikiPageEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelines">notifyOnlyBrokenPipelines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.webhook">webhook</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `branchesToBeNotifiedInput`<sup>Optional</sup> <a name="branchesToBeNotifiedInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.branchesToBeNotifiedInput"></a>

```java
public java.lang.String getBranchesToBeNotifiedInput();
```

- *Type:* java.lang.String

---

##### `confidentialIssuesEventsInput`<sup>Optional</sup> <a name="confidentialIssuesEventsInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.confidentialIssuesEventsInput"></a>

```java
public java.lang.Object getConfidentialIssuesEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialNoteEventsInput`<sup>Optional</sup> <a name="confidentialNoteEventsInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.confidentialNoteEventsInput"></a>

```java
public java.lang.Object getConfidentialNoteEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuesEventsInput`<sup>Optional</sup> <a name="issuesEventsInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.issuesEventsInput"></a>

```java
public java.lang.Object getIssuesEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsEventsInput`<sup>Optional</sup> <a name="mergeRequestsEventsInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.mergeRequestsEventsInput"></a>

```java
public java.lang.Object getMergeRequestsEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noteEventsInput`<sup>Optional</sup> <a name="noteEventsInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.noteEventsInput"></a>

```java
public java.lang.Object getNoteEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="notifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelinesInput"></a>

```java
public java.lang.Object getNotifyOnlyBrokenPipelinesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipelineEventsInput`<sup>Optional</sup> <a name="pipelineEventsInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.pipelineEventsInput"></a>

```java
public java.lang.Object getPipelineEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pushEventsInput`<sup>Optional</sup> <a name="pushEventsInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.pushEventsInput"></a>

```java
public java.lang.Object getPushEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagPushEventsInput`<sup>Optional</sup> <a name="tagPushEventsInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.tagPushEventsInput"></a>

```java
public java.lang.Object getTagPushEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.webhookInput"></a>

```java
public java.lang.String getWebhookInput();
```

- *Type:* java.lang.String

---

##### `wikiPageEventsInput`<sup>Optional</sup> <a name="wikiPageEventsInput" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.wikiPageEventsInput"></a>

```java
public java.lang.Object getWikiPageEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `branchesToBeNotified`<sup>Required</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.branchesToBeNotified"></a>

```java
public java.lang.String getBranchesToBeNotified();
```

- *Type:* java.lang.String

---

##### `confidentialIssuesEvents`<sup>Required</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.confidentialIssuesEvents"></a>

```java
public java.lang.Object getConfidentialIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialNoteEvents`<sup>Required</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.confidentialNoteEvents"></a>

```java
public java.lang.Object getConfidentialNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuesEvents`<sup>Required</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.issuesEvents"></a>

```java
public java.lang.Object getIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsEvents`<sup>Required</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noteEvents`<sup>Required</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.noteEvents"></a>

```java
public java.lang.Object getNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notifyOnlyBrokenPipelines`<sup>Required</sup> <a name="notifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelines"></a>

```java
public java.lang.Object getNotifyOnlyBrokenPipelines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipelineEvents`<sup>Required</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.pipelineEvents"></a>

```java
public java.lang.Object getPipelineEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pushEvents`<sup>Required</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.pushEvents"></a>

```java
public java.lang.Object getPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagPushEvents`<sup>Required</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.tagPushEvents"></a>

```java
public java.lang.Object getTagPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.webhook"></a>

```java
public java.lang.String getWebhook();
```

- *Type:* java.lang.String

---

##### `wikiPageEvents`<sup>Required</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.wikiPageEvents"></a>

```java
public java.lang.Object getWikiPageEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeams.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationMicrosoftTeamsConfig <a name="IntegrationMicrosoftTeamsConfig" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_microsoft_teams.IntegrationMicrosoftTeamsConfig;

IntegrationMicrosoftTeamsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .project(java.lang.String)
    .webhook(java.lang.String)
//  .branchesToBeNotified(java.lang.String)
//  .confidentialIssuesEvents(java.lang.Boolean)
//  .confidentialIssuesEvents(IResolvable)
//  .confidentialNoteEvents(java.lang.Boolean)
//  .confidentialNoteEvents(IResolvable)
//  .id(java.lang.String)
//  .issuesEvents(java.lang.Boolean)
//  .issuesEvents(IResolvable)
//  .mergeRequestsEvents(java.lang.Boolean)
//  .mergeRequestsEvents(IResolvable)
//  .noteEvents(java.lang.Boolean)
//  .noteEvents(IResolvable)
//  .notifyOnlyBrokenPipelines(java.lang.Boolean)
//  .notifyOnlyBrokenPipelines(IResolvable)
//  .pipelineEvents(java.lang.Boolean)
//  .pipelineEvents(IResolvable)
//  .pushEvents(java.lang.Boolean)
//  .pushEvents(IResolvable)
//  .tagPushEvents(java.lang.Boolean)
//  .tagPushEvents(IResolvable)
//  .wikiPageEvents(java.lang.Boolean)
//  .wikiPageEvents(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.webhook">webhook</a></code> | <code>java.lang.String</code> | The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.confidentialIssuesEvents">confidentialIssuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential issue events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.confidentialNoteEvents">confidentialNoteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#id IntegrationMicrosoftTeams#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.issuesEvents">issuesEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for issue events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.mergeRequestsEvents">mergeRequestsEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.noteEvents">noteEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.notifyOnlyBrokenPipelines">notifyOnlyBrokenPipelines</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.pipelineEvents">pipelineEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.wikiPageEvents">wikiPageEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for wiki page events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#project IntegrationMicrosoftTeams#project}

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.webhook"></a>

```java
public java.lang.String getWebhook();
```

- *Type:* java.lang.String

The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#webhook IntegrationMicrosoftTeams#webhook}

---

##### `branchesToBeNotified`<sup>Optional</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.branchesToBeNotified"></a>

```java
public java.lang.String getBranchesToBeNotified();
```

- *Type:* java.lang.String

Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#branches_to_be_notified IntegrationMicrosoftTeams#branches_to_be_notified}

---

##### `confidentialIssuesEvents`<sup>Optional</sup> <a name="confidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.confidentialIssuesEvents"></a>

```java
public java.lang.Object getConfidentialIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#confidential_issues_events IntegrationMicrosoftTeams#confidential_issues_events}

---

##### `confidentialNoteEvents`<sup>Optional</sup> <a name="confidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.confidentialNoteEvents"></a>

```java
public java.lang.Object getConfidentialNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#confidential_note_events IntegrationMicrosoftTeams#confidential_note_events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#id IntegrationMicrosoftTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuesEvents`<sup>Optional</sup> <a name="issuesEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.issuesEvents"></a>

```java
public java.lang.Object getIssuesEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#issues_events IntegrationMicrosoftTeams#issues_events}

---

##### `mergeRequestsEvents`<sup>Optional</sup> <a name="mergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.mergeRequestsEvents"></a>

```java
public java.lang.Object getMergeRequestsEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#merge_requests_events IntegrationMicrosoftTeams#merge_requests_events}

---

##### `noteEvents`<sup>Optional</sup> <a name="noteEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.noteEvents"></a>

```java
public java.lang.Object getNoteEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#note_events IntegrationMicrosoftTeams#note_events}

---

##### `notifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="notifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.notifyOnlyBrokenPipelines"></a>

```java
public java.lang.Object getNotifyOnlyBrokenPipelines();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#notify_only_broken_pipelines IntegrationMicrosoftTeams#notify_only_broken_pipelines}

---

##### `pipelineEvents`<sup>Optional</sup> <a name="pipelineEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.pipelineEvents"></a>

```java
public java.lang.Object getPipelineEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#pipeline_events IntegrationMicrosoftTeams#pipeline_events}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.pushEvents"></a>

```java
public java.lang.Object getPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#push_events IntegrationMicrosoftTeams#push_events}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.tagPushEvents"></a>

```java
public java.lang.Object getTagPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#tag_push_events IntegrationMicrosoftTeams#tag_push_events}

---

##### `wikiPageEvents`<sup>Optional</sup> <a name="wikiPageEvents" id="@cdktf/provider-gitlab.integrationMicrosoftTeams.IntegrationMicrosoftTeamsConfig.property.wikiPageEvents"></a>

```java
public java.lang.Object getWikiPageEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/integration_microsoft_teams#wiki_page_events IntegrationMicrosoftTeams#wiki_page_events}

---



