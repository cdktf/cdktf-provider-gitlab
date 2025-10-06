# `globalLevelNotifications` Submodule <a name="`globalLevelNotifications` Submodule" id="@cdktf/provider-gitlab.globalLevelNotifications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalLevelNotifications <a name="GlobalLevelNotifications" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications gitlab_global_level_notifications}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.global_level_notifications.GlobalLevelNotifications;

GlobalLevelNotifications.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .closeIssue(java.lang.Boolean|IResolvable)
//  .closeMergeRequest(java.lang.Boolean|IResolvable)
//  .failedPipeline(java.lang.Boolean|IResolvable)
//  .fixedPipeline(java.lang.Boolean|IResolvable)
//  .issueDue(java.lang.Boolean|IResolvable)
//  .level(java.lang.String)
//  .mergeMergeRequest(java.lang.Boolean|IResolvable)
//  .mergeWhenPipelineSucceeds(java.lang.Boolean|IResolvable)
//  .movedProject(java.lang.Boolean|IResolvable)
//  .newIssue(java.lang.Boolean|IResolvable)
//  .newMergeRequest(java.lang.Boolean|IResolvable)
//  .newNote(java.lang.Boolean|IResolvable)
//  .pushToMergeRequest(java.lang.Boolean|IResolvable)
//  .reassignIssue(java.lang.Boolean|IResolvable)
//  .reassignMergeRequest(java.lang.Boolean|IResolvable)
//  .reopenIssue(java.lang.Boolean|IResolvable)
//  .reopenMergeRequest(java.lang.Boolean|IResolvable)
//  .successPipeline(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.closeIssue">closeIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for closed issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.closeMergeRequest">closeMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for closed merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.failedPipeline">failedPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for failed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.fixedPipeline">fixedPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for fixed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.issueDue">issueDue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for due issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.level">level</a></code> | <code>java.lang.String</code> | The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.mergeMergeRequest">mergeMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merged merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.mergeWhenPipelineSucceeds">mergeWhenPipelineSucceeds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.movedProject">movedProject</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for moved projects. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.newIssue">newIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for new issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.newMergeRequest">newMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for new merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.newNote">newNote</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.pushToMergeRequest">pushToMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push to merge request branches. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.reassignIssue">reassignIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for issue reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.reassignMergeRequest">reassignMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge request reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.reopenIssue">reopenIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for reopened issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.reopenMergeRequest">reopenMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for reopened merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.successPipeline">successPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for successful pipelines. Can only be used when `level` is `custom`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `closeIssue`<sup>Optional</sup> <a name="closeIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.closeIssue"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for closed issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#close_issue GlobalLevelNotifications#close_issue}

---

##### `closeMergeRequest`<sup>Optional</sup> <a name="closeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.closeMergeRequest"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for closed merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#close_merge_request GlobalLevelNotifications#close_merge_request}

---

##### `failedPipeline`<sup>Optional</sup> <a name="failedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.failedPipeline"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for failed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#failed_pipeline GlobalLevelNotifications#failed_pipeline}

---

##### `fixedPipeline`<sup>Optional</sup> <a name="fixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.fixedPipeline"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for fixed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#fixed_pipeline GlobalLevelNotifications#fixed_pipeline}

---

##### `issueDue`<sup>Optional</sup> <a name="issueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.issueDue"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for due issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#issue_due GlobalLevelNotifications#issue_due}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.level"></a>

- *Type:* java.lang.String

The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#level GlobalLevelNotifications#level}

---

##### `mergeMergeRequest`<sup>Optional</sup> <a name="mergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.mergeMergeRequest"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for merged merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#merge_merge_request GlobalLevelNotifications#merge_merge_request}

---

##### `mergeWhenPipelineSucceeds`<sup>Optional</sup> <a name="mergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.mergeWhenPipelineSucceeds"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#merge_when_pipeline_succeeds GlobalLevelNotifications#merge_when_pipeline_succeeds}

---

##### `movedProject`<sup>Optional</sup> <a name="movedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.movedProject"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for moved projects. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#moved_project GlobalLevelNotifications#moved_project}

---

##### `newIssue`<sup>Optional</sup> <a name="newIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.newIssue"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for new issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#new_issue GlobalLevelNotifications#new_issue}

---

##### `newMergeRequest`<sup>Optional</sup> <a name="newMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.newMergeRequest"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for new merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#new_merge_request GlobalLevelNotifications#new_merge_request}

---

##### `newNote`<sup>Optional</sup> <a name="newNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.newNote"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#new_note GlobalLevelNotifications#new_note}

---

##### `pushToMergeRequest`<sup>Optional</sup> <a name="pushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.pushToMergeRequest"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for push to merge request branches. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#push_to_merge_request GlobalLevelNotifications#push_to_merge_request}

---

##### `reassignIssue`<sup>Optional</sup> <a name="reassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.reassignIssue"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for issue reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#reassign_issue GlobalLevelNotifications#reassign_issue}

---

##### `reassignMergeRequest`<sup>Optional</sup> <a name="reassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.reassignMergeRequest"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for merge request reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#reassign_merge_request GlobalLevelNotifications#reassign_merge_request}

---

##### `reopenIssue`<sup>Optional</sup> <a name="reopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.reopenIssue"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for reopened issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#reopen_issue GlobalLevelNotifications#reopen_issue}

---

##### `reopenMergeRequest`<sup>Optional</sup> <a name="reopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.reopenMergeRequest"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for reopened merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#reopen_merge_request GlobalLevelNotifications#reopen_merge_request}

---

##### `successPipeline`<sup>Optional</sup> <a name="successPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.successPipeline"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for successful pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#success_pipeline GlobalLevelNotifications#success_pipeline}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseIssue">resetCloseIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseMergeRequest">resetCloseMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFailedPipeline">resetFailedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFixedPipeline">resetFixedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetIssueDue">resetIssueDue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeMergeRequest">resetMergeMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeWhenPipelineSucceeds">resetMergeWhenPipelineSucceeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMovedProject">resetMovedProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewIssue">resetNewIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewMergeRequest">resetNewMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewNote">resetNewNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetPushToMergeRequest">resetPushToMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignIssue">resetReassignIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignMergeRequest">resetReassignMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenIssue">resetReopenIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenMergeRequest">resetReopenMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetSuccessPipeline">resetSuccessPipeline</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCloseIssue` <a name="resetCloseIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseIssue"></a>

```java
public void resetCloseIssue()
```

##### `resetCloseMergeRequest` <a name="resetCloseMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseMergeRequest"></a>

```java
public void resetCloseMergeRequest()
```

##### `resetFailedPipeline` <a name="resetFailedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFailedPipeline"></a>

```java
public void resetFailedPipeline()
```

##### `resetFixedPipeline` <a name="resetFixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFixedPipeline"></a>

```java
public void resetFixedPipeline()
```

##### `resetIssueDue` <a name="resetIssueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetIssueDue"></a>

```java
public void resetIssueDue()
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetLevel"></a>

```java
public void resetLevel()
```

##### `resetMergeMergeRequest` <a name="resetMergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeMergeRequest"></a>

```java
public void resetMergeMergeRequest()
```

##### `resetMergeWhenPipelineSucceeds` <a name="resetMergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeWhenPipelineSucceeds"></a>

```java
public void resetMergeWhenPipelineSucceeds()
```

##### `resetMovedProject` <a name="resetMovedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMovedProject"></a>

```java
public void resetMovedProject()
```

##### `resetNewIssue` <a name="resetNewIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewIssue"></a>

```java
public void resetNewIssue()
```

##### `resetNewMergeRequest` <a name="resetNewMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewMergeRequest"></a>

```java
public void resetNewMergeRequest()
```

##### `resetNewNote` <a name="resetNewNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewNote"></a>

```java
public void resetNewNote()
```

##### `resetPushToMergeRequest` <a name="resetPushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetPushToMergeRequest"></a>

```java
public void resetPushToMergeRequest()
```

##### `resetReassignIssue` <a name="resetReassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignIssue"></a>

```java
public void resetReassignIssue()
```

##### `resetReassignMergeRequest` <a name="resetReassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignMergeRequest"></a>

```java
public void resetReassignMergeRequest()
```

##### `resetReopenIssue` <a name="resetReopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenIssue"></a>

```java
public void resetReopenIssue()
```

##### `resetReopenMergeRequest` <a name="resetReopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenMergeRequest"></a>

```java
public void resetReopenMergeRequest()
```

##### `resetSuccessPipeline` <a name="resetSuccessPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetSuccessPipeline"></a>

```java
public void resetSuccessPipeline()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalLevelNotifications resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.global_level_notifications.GlobalLevelNotifications;

GlobalLevelNotifications.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.global_level_notifications.GlobalLevelNotifications;

GlobalLevelNotifications.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.global_level_notifications.GlobalLevelNotifications;

GlobalLevelNotifications.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.global_level_notifications.GlobalLevelNotifications;

GlobalLevelNotifications.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlobalLevelNotifications.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GlobalLevelNotifications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlobalLevelNotifications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlobalLevelNotifications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GlobalLevelNotifications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssueInput">closeIssueInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequestInput">closeMergeRequestInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipelineInput">failedPipelineInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipelineInput">fixedPipelineInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDueInput">issueDueInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequestInput">mergeMergeRequestInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceedsInput">mergeWhenPipelineSucceedsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProjectInput">movedProjectInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssueInput">newIssueInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequestInput">newMergeRequestInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNoteInput">newNoteInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequestInput">pushToMergeRequestInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssueInput">reassignIssueInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequestInput">reassignMergeRequestInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssueInput">reopenIssueInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequestInput">reopenMergeRequestInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipelineInput">successPipelineInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssue">closeIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequest">closeMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipeline">failedPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipeline">fixedPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDue">issueDue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequest">mergeMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceeds">mergeWhenPipelineSucceeds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProject">movedProject</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssue">newIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequest">newMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNote">newNote</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequest">pushToMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssue">reassignIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequest">reassignMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssue">reopenIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequest">reopenMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipeline">successPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `closeIssueInput`<sup>Optional</sup> <a name="closeIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssueInput"></a>

```java
public java.lang.Boolean|IResolvable getCloseIssueInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `closeMergeRequestInput`<sup>Optional</sup> <a name="closeMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequestInput"></a>

```java
public java.lang.Boolean|IResolvable getCloseMergeRequestInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `failedPipelineInput`<sup>Optional</sup> <a name="failedPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipelineInput"></a>

```java
public java.lang.Boolean|IResolvable getFailedPipelineInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fixedPipelineInput`<sup>Optional</sup> <a name="fixedPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipelineInput"></a>

```java
public java.lang.Boolean|IResolvable getFixedPipelineInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `issueDueInput`<sup>Optional</sup> <a name="issueDueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDueInput"></a>

```java
public java.lang.Boolean|IResolvable getIssueDueInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `mergeMergeRequestInput`<sup>Optional</sup> <a name="mergeMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequestInput"></a>

```java
public java.lang.Boolean|IResolvable getMergeMergeRequestInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeWhenPipelineSucceedsInput`<sup>Optional</sup> <a name="mergeWhenPipelineSucceedsInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceedsInput"></a>

```java
public java.lang.Boolean|IResolvable getMergeWhenPipelineSucceedsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `movedProjectInput`<sup>Optional</sup> <a name="movedProjectInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProjectInput"></a>

```java
public java.lang.Boolean|IResolvable getMovedProjectInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `newIssueInput`<sup>Optional</sup> <a name="newIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssueInput"></a>

```java
public java.lang.Boolean|IResolvable getNewIssueInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `newMergeRequestInput`<sup>Optional</sup> <a name="newMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequestInput"></a>

```java
public java.lang.Boolean|IResolvable getNewMergeRequestInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `newNoteInput`<sup>Optional</sup> <a name="newNoteInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNoteInput"></a>

```java
public java.lang.Boolean|IResolvable getNewNoteInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pushToMergeRequestInput`<sup>Optional</sup> <a name="pushToMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequestInput"></a>

```java
public java.lang.Boolean|IResolvable getPushToMergeRequestInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `reassignIssueInput`<sup>Optional</sup> <a name="reassignIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssueInput"></a>

```java
public java.lang.Boolean|IResolvable getReassignIssueInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `reassignMergeRequestInput`<sup>Optional</sup> <a name="reassignMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequestInput"></a>

```java
public java.lang.Boolean|IResolvable getReassignMergeRequestInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `reopenIssueInput`<sup>Optional</sup> <a name="reopenIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssueInput"></a>

```java
public java.lang.Boolean|IResolvable getReopenIssueInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `reopenMergeRequestInput`<sup>Optional</sup> <a name="reopenMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequestInput"></a>

```java
public java.lang.Boolean|IResolvable getReopenMergeRequestInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `successPipelineInput`<sup>Optional</sup> <a name="successPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipelineInput"></a>

```java
public java.lang.Boolean|IResolvable getSuccessPipelineInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `closeIssue`<sup>Required</sup> <a name="closeIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssue"></a>

```java
public java.lang.Boolean|IResolvable getCloseIssue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `closeMergeRequest`<sup>Required</sup> <a name="closeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getCloseMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `failedPipeline`<sup>Required</sup> <a name="failedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipeline"></a>

```java
public java.lang.Boolean|IResolvable getFailedPipeline();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fixedPipeline`<sup>Required</sup> <a name="fixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipeline"></a>

```java
public java.lang.Boolean|IResolvable getFixedPipeline();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `issueDue`<sup>Required</sup> <a name="issueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDue"></a>

```java
public java.lang.Boolean|IResolvable getIssueDue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `mergeMergeRequest`<sup>Required</sup> <a name="mergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getMergeMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeWhenPipelineSucceeds`<sup>Required</sup> <a name="mergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceeds"></a>

```java
public java.lang.Boolean|IResolvable getMergeWhenPipelineSucceeds();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `movedProject`<sup>Required</sup> <a name="movedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProject"></a>

```java
public java.lang.Boolean|IResolvable getMovedProject();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `newIssue`<sup>Required</sup> <a name="newIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssue"></a>

```java
public java.lang.Boolean|IResolvable getNewIssue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `newMergeRequest`<sup>Required</sup> <a name="newMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getNewMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `newNote`<sup>Required</sup> <a name="newNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNote"></a>

```java
public java.lang.Boolean|IResolvable getNewNote();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pushToMergeRequest`<sup>Required</sup> <a name="pushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getPushToMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `reassignIssue`<sup>Required</sup> <a name="reassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssue"></a>

```java
public java.lang.Boolean|IResolvable getReassignIssue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `reassignMergeRequest`<sup>Required</sup> <a name="reassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getReassignMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `reopenIssue`<sup>Required</sup> <a name="reopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssue"></a>

```java
public java.lang.Boolean|IResolvable getReopenIssue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `reopenMergeRequest`<sup>Required</sup> <a name="reopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getReopenMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `successPipeline`<sup>Required</sup> <a name="successPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipeline"></a>

```java
public java.lang.Boolean|IResolvable getSuccessPipeline();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalLevelNotificationsConfig <a name="GlobalLevelNotificationsConfig" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.global_level_notifications.GlobalLevelNotificationsConfig;

GlobalLevelNotificationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .closeIssue(java.lang.Boolean|IResolvable)
//  .closeMergeRequest(java.lang.Boolean|IResolvable)
//  .failedPipeline(java.lang.Boolean|IResolvable)
//  .fixedPipeline(java.lang.Boolean|IResolvable)
//  .issueDue(java.lang.Boolean|IResolvable)
//  .level(java.lang.String)
//  .mergeMergeRequest(java.lang.Boolean|IResolvable)
//  .mergeWhenPipelineSucceeds(java.lang.Boolean|IResolvable)
//  .movedProject(java.lang.Boolean|IResolvable)
//  .newIssue(java.lang.Boolean|IResolvable)
//  .newMergeRequest(java.lang.Boolean|IResolvable)
//  .newNote(java.lang.Boolean|IResolvable)
//  .pushToMergeRequest(java.lang.Boolean|IResolvable)
//  .reassignIssue(java.lang.Boolean|IResolvable)
//  .reassignMergeRequest(java.lang.Boolean|IResolvable)
//  .reopenIssue(java.lang.Boolean|IResolvable)
//  .reopenMergeRequest(java.lang.Boolean|IResolvable)
//  .successPipeline(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeIssue">closeIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for closed issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeMergeRequest">closeMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for closed merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.failedPipeline">failedPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for failed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.fixedPipeline">fixedPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for fixed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.issueDue">issueDue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for due issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.level">level</a></code> | <code>java.lang.String</code> | The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeMergeRequest">mergeMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merged merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeWhenPipelineSucceeds">mergeWhenPipelineSucceeds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.movedProject">movedProject</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for moved projects. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newIssue">newIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for new issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newMergeRequest">newMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for new merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newNote">newNote</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.pushToMergeRequest">pushToMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push to merge request branches. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignIssue">reassignIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for issue reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignMergeRequest">reassignMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge request reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenIssue">reopenIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for reopened issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenMergeRequest">reopenMergeRequest</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for reopened merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.successPipeline">successPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for successful pipelines. Can only be used when `level` is `custom`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `closeIssue`<sup>Optional</sup> <a name="closeIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeIssue"></a>

```java
public java.lang.Boolean|IResolvable getCloseIssue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for closed issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#close_issue GlobalLevelNotifications#close_issue}

---

##### `closeMergeRequest`<sup>Optional</sup> <a name="closeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getCloseMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for closed merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#close_merge_request GlobalLevelNotifications#close_merge_request}

---

##### `failedPipeline`<sup>Optional</sup> <a name="failedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.failedPipeline"></a>

```java
public java.lang.Boolean|IResolvable getFailedPipeline();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for failed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#failed_pipeline GlobalLevelNotifications#failed_pipeline}

---

##### `fixedPipeline`<sup>Optional</sup> <a name="fixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.fixedPipeline"></a>

```java
public java.lang.Boolean|IResolvable getFixedPipeline();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for fixed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#fixed_pipeline GlobalLevelNotifications#fixed_pipeline}

---

##### `issueDue`<sup>Optional</sup> <a name="issueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.issueDue"></a>

```java
public java.lang.Boolean|IResolvable getIssueDue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for due issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#issue_due GlobalLevelNotifications#issue_due}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#level GlobalLevelNotifications#level}

---

##### `mergeMergeRequest`<sup>Optional</sup> <a name="mergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getMergeMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for merged merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#merge_merge_request GlobalLevelNotifications#merge_merge_request}

---

##### `mergeWhenPipelineSucceeds`<sup>Optional</sup> <a name="mergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeWhenPipelineSucceeds"></a>

```java
public java.lang.Boolean|IResolvable getMergeWhenPipelineSucceeds();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#merge_when_pipeline_succeeds GlobalLevelNotifications#merge_when_pipeline_succeeds}

---

##### `movedProject`<sup>Optional</sup> <a name="movedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.movedProject"></a>

```java
public java.lang.Boolean|IResolvable getMovedProject();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for moved projects. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#moved_project GlobalLevelNotifications#moved_project}

---

##### `newIssue`<sup>Optional</sup> <a name="newIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newIssue"></a>

```java
public java.lang.Boolean|IResolvable getNewIssue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for new issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#new_issue GlobalLevelNotifications#new_issue}

---

##### `newMergeRequest`<sup>Optional</sup> <a name="newMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getNewMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for new merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#new_merge_request GlobalLevelNotifications#new_merge_request}

---

##### `newNote`<sup>Optional</sup> <a name="newNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newNote"></a>

```java
public java.lang.Boolean|IResolvable getNewNote();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#new_note GlobalLevelNotifications#new_note}

---

##### `pushToMergeRequest`<sup>Optional</sup> <a name="pushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.pushToMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getPushToMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for push to merge request branches. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#push_to_merge_request GlobalLevelNotifications#push_to_merge_request}

---

##### `reassignIssue`<sup>Optional</sup> <a name="reassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignIssue"></a>

```java
public java.lang.Boolean|IResolvable getReassignIssue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for issue reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#reassign_issue GlobalLevelNotifications#reassign_issue}

---

##### `reassignMergeRequest`<sup>Optional</sup> <a name="reassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getReassignMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for merge request reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#reassign_merge_request GlobalLevelNotifications#reassign_merge_request}

---

##### `reopenIssue`<sup>Optional</sup> <a name="reopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenIssue"></a>

```java
public java.lang.Boolean|IResolvable getReopenIssue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for reopened issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#reopen_issue GlobalLevelNotifications#reopen_issue}

---

##### `reopenMergeRequest`<sup>Optional</sup> <a name="reopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenMergeRequest"></a>

```java
public java.lang.Boolean|IResolvable getReopenMergeRequest();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for reopened merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#reopen_merge_request GlobalLevelNotifications#reopen_merge_request}

---

##### `successPipeline`<sup>Optional</sup> <a name="successPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.successPipeline"></a>

```java
public java.lang.Boolean|IResolvable getSuccessPipeline();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for successful pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/global_level_notifications#success_pipeline GlobalLevelNotifications#success_pipeline}

---



