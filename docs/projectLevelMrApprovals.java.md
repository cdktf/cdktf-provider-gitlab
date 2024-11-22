# `projectLevelMrApprovals` Submodule <a name="`projectLevelMrApprovals` Submodule" id="@cdktf/provider-gitlab.projectLevelMrApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectLevelMrApprovals <a name="ProjectLevelMrApprovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals gitlab_project_level_mr_approvals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_level_mr_approvals.ProjectLevelMrApprovals;

ProjectLevelMrApprovals.Builder.create(Construct scope, java.lang.String id)
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
//  .disableOverridingApproversPerMergeRequest(java.lang.Boolean)
//  .disableOverridingApproversPerMergeRequest(IResolvable)
//  .mergeRequestsAuthorApproval(java.lang.Boolean)
//  .mergeRequestsAuthorApproval(IResolvable)
//  .mergeRequestsDisableCommittersApproval(java.lang.Boolean)
//  .mergeRequestsDisableCommittersApproval(IResolvable)
//  .requirePasswordToApprove(java.lang.Boolean)
//  .requirePasswordToApprove(IResolvable)
//  .resetApprovalsOnPush(java.lang.Boolean)
//  .resetApprovalsOnPush(IResolvable)
//  .selectiveCodeOwnerRemovals(java.lang.Boolean)
//  .selectiveCodeOwnerRemovals(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of a project to change MR approval configuration. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.disableOverridingApproversPerMergeRequest">disableOverridingApproversPerMergeRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to disable overriding approvers per merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.mergeRequestsAuthorApproval">mergeRequestsAuthorApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to allow merge requests authors to approve their own merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.mergeRequestsDisableCommittersApproval">mergeRequestsDisableCommittersApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to disable merge request committers from approving their own merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.requirePasswordToApprove">requirePasswordToApprove</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to require authentication to approve merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.resetApprovalsOnPush">resetApprovalsOnPush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to remove all approvals in a merge request when new commits are pushed to its source branch. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.selectiveCodeOwnerRemovals">selectiveCodeOwnerRemovals</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Reset approvals from Code Owners if their files changed. Can be enabled only if reset_approvals_on_push is disabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or URL-encoded path of a project to change MR approval configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#project ProjectLevelMrApprovals#project}

---

##### `disableOverridingApproversPerMergeRequest`<sup>Optional</sup> <a name="disableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.disableOverridingApproversPerMergeRequest"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to disable overriding approvers per merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#disable_overriding_approvers_per_merge_request ProjectLevelMrApprovals#disable_overriding_approvers_per_merge_request}

---

##### `mergeRequestsAuthorApproval`<sup>Optional</sup> <a name="mergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.mergeRequestsAuthorApproval"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to allow merge requests authors to approve their own merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#merge_requests_author_approval ProjectLevelMrApprovals#merge_requests_author_approval}

---

##### `mergeRequestsDisableCommittersApproval`<sup>Optional</sup> <a name="mergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.mergeRequestsDisableCommittersApproval"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to disable merge request committers from approving their own merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#merge_requests_disable_committers_approval ProjectLevelMrApprovals#merge_requests_disable_committers_approval}

---

##### `requirePasswordToApprove`<sup>Optional</sup> <a name="requirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.requirePasswordToApprove"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to require authentication to approve merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#require_password_to_approve ProjectLevelMrApprovals#require_password_to_approve}

---

##### `resetApprovalsOnPush`<sup>Optional</sup> <a name="resetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.resetApprovalsOnPush"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to remove all approvals in a merge request when new commits are pushed to its source branch.

Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#reset_approvals_on_push ProjectLevelMrApprovals#reset_approvals_on_push}

---

##### `selectiveCodeOwnerRemovals`<sup>Optional</sup> <a name="selectiveCodeOwnerRemovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.selectiveCodeOwnerRemovals"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Reset approvals from Code Owners if their files changed. Can be enabled only if reset_approvals_on_push is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#selective_code_owner_removals ProjectLevelMrApprovals#selective_code_owner_removals}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetDisableOverridingApproversPerMergeRequest">resetDisableOverridingApproversPerMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsAuthorApproval">resetMergeRequestsAuthorApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsDisableCommittersApproval">resetMergeRequestsDisableCommittersApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetRequirePasswordToApprove">resetRequirePasswordToApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetResetApprovalsOnPush">resetResetApprovalsOnPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetSelectiveCodeOwnerRemovals">resetSelectiveCodeOwnerRemovals</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisableOverridingApproversPerMergeRequest` <a name="resetDisableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetDisableOverridingApproversPerMergeRequest"></a>

```java
public void resetDisableOverridingApproversPerMergeRequest()
```

##### `resetMergeRequestsAuthorApproval` <a name="resetMergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsAuthorApproval"></a>

```java
public void resetMergeRequestsAuthorApproval()
```

##### `resetMergeRequestsDisableCommittersApproval` <a name="resetMergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsDisableCommittersApproval"></a>

```java
public void resetMergeRequestsDisableCommittersApproval()
```

##### `resetRequirePasswordToApprove` <a name="resetRequirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetRequirePasswordToApprove"></a>

```java
public void resetRequirePasswordToApprove()
```

##### `resetResetApprovalsOnPush` <a name="resetResetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetResetApprovalsOnPush"></a>

```java
public void resetResetApprovalsOnPush()
```

##### `resetSelectiveCodeOwnerRemovals` <a name="resetSelectiveCodeOwnerRemovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetSelectiveCodeOwnerRemovals"></a>

```java
public void resetSelectiveCodeOwnerRemovals()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectLevelMrApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_level_mr_approvals.ProjectLevelMrApprovals;

ProjectLevelMrApprovals.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_level_mr_approvals.ProjectLevelMrApprovals;

ProjectLevelMrApprovals.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_level_mr_approvals.ProjectLevelMrApprovals;

ProjectLevelMrApprovals.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_level_mr_approvals.ProjectLevelMrApprovals;

ProjectLevelMrApprovals.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectLevelMrApprovals.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectLevelMrApprovals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectLevelMrApprovals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectLevelMrApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectLevelMrApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequestInput">disableOverridingApproversPerMergeRequestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApprovalInput">mergeRequestsAuthorApprovalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApprovalInput">mergeRequestsDisableCommittersApprovalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApproveInput">requirePasswordToApproveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPushInput">resetApprovalsOnPushInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovalsInput">selectiveCodeOwnerRemovalsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequest">disableOverridingApproversPerMergeRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApproval">mergeRequestsAuthorApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApproval">mergeRequestsDisableCommittersApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApprove">requirePasswordToApprove</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPush">resetApprovalsOnPush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovals">selectiveCodeOwnerRemovals</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `disableOverridingApproversPerMergeRequestInput`<sup>Optional</sup> <a name="disableOverridingApproversPerMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequestInput"></a>

```java
public java.lang.Object getDisableOverridingApproversPerMergeRequestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsAuthorApprovalInput`<sup>Optional</sup> <a name="mergeRequestsAuthorApprovalInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApprovalInput"></a>

```java
public java.lang.Object getMergeRequestsAuthorApprovalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsDisableCommittersApprovalInput`<sup>Optional</sup> <a name="mergeRequestsDisableCommittersApprovalInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApprovalInput"></a>

```java
public java.lang.Object getMergeRequestsDisableCommittersApprovalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `requirePasswordToApproveInput`<sup>Optional</sup> <a name="requirePasswordToApproveInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApproveInput"></a>

```java
public java.lang.Object getRequirePasswordToApproveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resetApprovalsOnPushInput`<sup>Optional</sup> <a name="resetApprovalsOnPushInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPushInput"></a>

```java
public java.lang.Object getResetApprovalsOnPushInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `selectiveCodeOwnerRemovalsInput`<sup>Optional</sup> <a name="selectiveCodeOwnerRemovalsInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovalsInput"></a>

```java
public java.lang.Object getSelectiveCodeOwnerRemovalsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableOverridingApproversPerMergeRequest`<sup>Required</sup> <a name="disableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequest"></a>

```java
public java.lang.Object getDisableOverridingApproversPerMergeRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsAuthorApproval`<sup>Required</sup> <a name="mergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApproval"></a>

```java
public java.lang.Object getMergeRequestsAuthorApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsDisableCommittersApproval`<sup>Required</sup> <a name="mergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApproval"></a>

```java
public java.lang.Object getMergeRequestsDisableCommittersApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `requirePasswordToApprove`<sup>Required</sup> <a name="requirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApprove"></a>

```java
public java.lang.Object getRequirePasswordToApprove();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resetApprovalsOnPush`<sup>Required</sup> <a name="resetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPush"></a>

```java
public java.lang.Object getResetApprovalsOnPush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `selectiveCodeOwnerRemovals`<sup>Required</sup> <a name="selectiveCodeOwnerRemovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovals"></a>

```java
public java.lang.Object getSelectiveCodeOwnerRemovals();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectLevelMrApprovalsConfig <a name="ProjectLevelMrApprovalsConfig" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_level_mr_approvals.ProjectLevelMrApprovalsConfig;

ProjectLevelMrApprovalsConfig.builder()
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
//  .disableOverridingApproversPerMergeRequest(java.lang.Boolean)
//  .disableOverridingApproversPerMergeRequest(IResolvable)
//  .mergeRequestsAuthorApproval(java.lang.Boolean)
//  .mergeRequestsAuthorApproval(IResolvable)
//  .mergeRequestsDisableCommittersApproval(java.lang.Boolean)
//  .mergeRequestsDisableCommittersApproval(IResolvable)
//  .requirePasswordToApprove(java.lang.Boolean)
//  .requirePasswordToApprove(IResolvable)
//  .resetApprovalsOnPush(java.lang.Boolean)
//  .resetApprovalsOnPush(IResolvable)
//  .selectiveCodeOwnerRemovals(java.lang.Boolean)
//  .selectiveCodeOwnerRemovals(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of a project to change MR approval configuration. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.disableOverridingApproversPerMergeRequest">disableOverridingApproversPerMergeRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to disable overriding approvers per merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsAuthorApproval">mergeRequestsAuthorApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to allow merge requests authors to approve their own merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsDisableCommittersApproval">mergeRequestsDisableCommittersApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to disable merge request committers from approving their own merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.requirePasswordToApprove">requirePasswordToApprove</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to require authentication to approve merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.resetApprovalsOnPush">resetApprovalsOnPush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to remove all approvals in a merge request when new commits are pushed to its source branch. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.selectiveCodeOwnerRemovals">selectiveCodeOwnerRemovals</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Reset approvals from Code Owners if their files changed. Can be enabled only if reset_approvals_on_push is disabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or URL-encoded path of a project to change MR approval configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#project ProjectLevelMrApprovals#project}

---

##### `disableOverridingApproversPerMergeRequest`<sup>Optional</sup> <a name="disableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.disableOverridingApproversPerMergeRequest"></a>

```java
public java.lang.Object getDisableOverridingApproversPerMergeRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to disable overriding approvers per merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#disable_overriding_approvers_per_merge_request ProjectLevelMrApprovals#disable_overriding_approvers_per_merge_request}

---

##### `mergeRequestsAuthorApproval`<sup>Optional</sup> <a name="mergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsAuthorApproval"></a>

```java
public java.lang.Object getMergeRequestsAuthorApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to allow merge requests authors to approve their own merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#merge_requests_author_approval ProjectLevelMrApprovals#merge_requests_author_approval}

---

##### `mergeRequestsDisableCommittersApproval`<sup>Optional</sup> <a name="mergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsDisableCommittersApproval"></a>

```java
public java.lang.Object getMergeRequestsDisableCommittersApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to disable merge request committers from approving their own merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#merge_requests_disable_committers_approval ProjectLevelMrApprovals#merge_requests_disable_committers_approval}

---

##### `requirePasswordToApprove`<sup>Optional</sup> <a name="requirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.requirePasswordToApprove"></a>

```java
public java.lang.Object getRequirePasswordToApprove();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to require authentication to approve merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#require_password_to_approve ProjectLevelMrApprovals#require_password_to_approve}

---

##### `resetApprovalsOnPush`<sup>Optional</sup> <a name="resetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.resetApprovalsOnPush"></a>

```java
public java.lang.Object getResetApprovalsOnPush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to remove all approvals in a merge request when new commits are pushed to its source branch.

Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#reset_approvals_on_push ProjectLevelMrApprovals#reset_approvals_on_push}

---

##### `selectiveCodeOwnerRemovals`<sup>Optional</sup> <a name="selectiveCodeOwnerRemovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.selectiveCodeOwnerRemovals"></a>

```java
public java.lang.Object getSelectiveCodeOwnerRemovals();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Reset approvals from Code Owners if their files changed. Can be enabled only if reset_approvals_on_push is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_mr_approvals#selective_code_owner_removals ProjectLevelMrApprovals#selective_code_owner_removals}

---



