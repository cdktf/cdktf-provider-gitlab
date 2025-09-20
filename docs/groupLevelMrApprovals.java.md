# `groupLevelMrApprovals` Submodule <a name="`groupLevelMrApprovals` Submodule" id="@cdktf/provider-gitlab.groupLevelMrApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupLevelMrApprovals <a name="GroupLevelMrApprovals" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals gitlab_group_level_mr_approvals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_level_mr_approvals.GroupLevelMrApprovals;

GroupLevelMrApprovals.Builder.create(Construct scope, java.lang.String id)
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
    .group(java.lang.String)
//  .allowAuthorApproval(java.lang.Boolean)
//  .allowAuthorApproval(IResolvable)
//  .allowCommitterApproval(java.lang.Boolean)
//  .allowCommitterApproval(IResolvable)
//  .allowOverridesToApproverListPerMergeRequest(java.lang.Boolean)
//  .allowOverridesToApproverListPerMergeRequest(IResolvable)
//  .keepSettingsOnDestroy(java.lang.Boolean)
//  .keepSettingsOnDestroy(IResolvable)
//  .requireReauthenticationToApprove(java.lang.Boolean)
//  .requireReauthenticationToApprove(IResolvable)
//  .retainApprovalsOnPush(java.lang.Boolean)
//  .retainApprovalsOnPush(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowAuthorApproval">allowAuthorApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow or prevent authors from self approving merge requests; `true` means authors can self approve. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowCommitterApproval">allowCommitterApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow or prevent committers from self approving merge requests. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowOverridesToApproverListPerMergeRequest">allowOverridesToApproverListPerMergeRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow or prevent overriding approvers per merge request. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.keepSettingsOnDestroy">keepSettingsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.requireReauthenticationToApprove">requireReauthenticationToApprove</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require approver to authenticate before adding the approval. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.retainApprovalsOnPush">retainApprovalsOnPush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Retain approval count on a new push. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.group"></a>

- *Type:* java.lang.String

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#group GroupLevelMrApprovals#group}

---

##### `allowAuthorApproval`<sup>Optional</sup> <a name="allowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowAuthorApproval"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow or prevent authors from self approving merge requests; `true` means authors can self approve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_author_approval GroupLevelMrApprovals#allow_author_approval}

---

##### `allowCommitterApproval`<sup>Optional</sup> <a name="allowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowCommitterApproval"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow or prevent committers from self approving merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_committer_approval GroupLevelMrApprovals#allow_committer_approval}

---

##### `allowOverridesToApproverListPerMergeRequest`<sup>Optional</sup> <a name="allowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.allowOverridesToApproverListPerMergeRequest"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow or prevent overriding approvers per merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_overrides_to_approver_list_per_merge_request GroupLevelMrApprovals#allow_overrides_to_approver_list_per_merge_request}

---

##### `keepSettingsOnDestroy`<sup>Optional</sup> <a name="keepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.keepSettingsOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy.

You will need to apply the resource with the new setting before destroying the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#keep_settings_on_destroy GroupLevelMrApprovals#keep_settings_on_destroy}

---

##### `requireReauthenticationToApprove`<sup>Optional</sup> <a name="requireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.requireReauthenticationToApprove"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require approver to authenticate before adding the approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#require_reauthentication_to_approve GroupLevelMrApprovals#require_reauthentication_to_approve}

---

##### `retainApprovalsOnPush`<sup>Optional</sup> <a name="retainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.retainApprovalsOnPush"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Retain approval count on a new push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#retain_approvals_on_push GroupLevelMrApprovals#retain_approvals_on_push}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowAuthorApproval">resetAllowAuthorApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowCommitterApproval">resetAllowCommitterApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowOverridesToApproverListPerMergeRequest">resetAllowOverridesToApproverListPerMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetKeepSettingsOnDestroy">resetKeepSettingsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRequireReauthenticationToApprove">resetRequireReauthenticationToApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRetainApprovalsOnPush">resetRetainApprovalsOnPush</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowAuthorApproval` <a name="resetAllowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowAuthorApproval"></a>

```java
public void resetAllowAuthorApproval()
```

##### `resetAllowCommitterApproval` <a name="resetAllowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowCommitterApproval"></a>

```java
public void resetAllowCommitterApproval()
```

##### `resetAllowOverridesToApproverListPerMergeRequest` <a name="resetAllowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowOverridesToApproverListPerMergeRequest"></a>

```java
public void resetAllowOverridesToApproverListPerMergeRequest()
```

##### `resetKeepSettingsOnDestroy` <a name="resetKeepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetKeepSettingsOnDestroy"></a>

```java
public void resetKeepSettingsOnDestroy()
```

##### `resetRequireReauthenticationToApprove` <a name="resetRequireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRequireReauthenticationToApprove"></a>

```java
public void resetRequireReauthenticationToApprove()
```

##### `resetRetainApprovalsOnPush` <a name="resetRetainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRetainApprovalsOnPush"></a>

```java
public void resetRetainApprovalsOnPush()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupLevelMrApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_level_mr_approvals.GroupLevelMrApprovals;

GroupLevelMrApprovals.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_level_mr_approvals.GroupLevelMrApprovals;

GroupLevelMrApprovals.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_level_mr_approvals.GroupLevelMrApprovals;

GroupLevelMrApprovals.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_level_mr_approvals.GroupLevelMrApprovals;

GroupLevelMrApprovals.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GroupLevelMrApprovals.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GroupLevelMrApprovals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GroupLevelMrApprovals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GroupLevelMrApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GroupLevelMrApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApprovalInput">allowAuthorApprovalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApprovalInput">allowCommitterApprovalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequestInput">allowOverridesToApproverListPerMergeRequestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroyInput">keepSettingsOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApproveInput">requireReauthenticationToApproveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPushInput">retainApprovalsOnPushInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApproval">allowAuthorApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApproval">allowCommitterApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequest">allowOverridesToApproverListPerMergeRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroy">keepSettingsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApprove">requireReauthenticationToApprove</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPush">retainApprovalsOnPush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `allowAuthorApprovalInput`<sup>Optional</sup> <a name="allowAuthorApprovalInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApprovalInput"></a>

```java
public java.lang.Object getAllowAuthorApprovalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowCommitterApprovalInput`<sup>Optional</sup> <a name="allowCommitterApprovalInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApprovalInput"></a>

```java
public java.lang.Object getAllowCommitterApprovalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowOverridesToApproverListPerMergeRequestInput`<sup>Optional</sup> <a name="allowOverridesToApproverListPerMergeRequestInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequestInput"></a>

```java
public java.lang.Object getAllowOverridesToApproverListPerMergeRequestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `keepSettingsOnDestroyInput`<sup>Optional</sup> <a name="keepSettingsOnDestroyInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroyInput"></a>

```java
public java.lang.Object getKeepSettingsOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireReauthenticationToApproveInput`<sup>Optional</sup> <a name="requireReauthenticationToApproveInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApproveInput"></a>

```java
public java.lang.Object getRequireReauthenticationToApproveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retainApprovalsOnPushInput`<sup>Optional</sup> <a name="retainApprovalsOnPushInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPushInput"></a>

```java
public java.lang.Object getRetainApprovalsOnPushInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowAuthorApproval`<sup>Required</sup> <a name="allowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApproval"></a>

```java
public java.lang.Object getAllowAuthorApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowCommitterApproval`<sup>Required</sup> <a name="allowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApproval"></a>

```java
public java.lang.Object getAllowCommitterApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowOverridesToApproverListPerMergeRequest`<sup>Required</sup> <a name="allowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequest"></a>

```java
public java.lang.Object getAllowOverridesToApproverListPerMergeRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `keepSettingsOnDestroy`<sup>Required</sup> <a name="keepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroy"></a>

```java
public java.lang.Object getKeepSettingsOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireReauthenticationToApprove`<sup>Required</sup> <a name="requireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApprove"></a>

```java
public java.lang.Object getRequireReauthenticationToApprove();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retainApprovalsOnPush`<sup>Required</sup> <a name="retainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPush"></a>

```java
public java.lang.Object getRetainApprovalsOnPush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GroupLevelMrApprovalsConfig <a name="GroupLevelMrApprovalsConfig" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group_level_mr_approvals.GroupLevelMrApprovalsConfig;

GroupLevelMrApprovalsConfig.builder()
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
    .group(java.lang.String)
//  .allowAuthorApproval(java.lang.Boolean)
//  .allowAuthorApproval(IResolvable)
//  .allowCommitterApproval(java.lang.Boolean)
//  .allowCommitterApproval(IResolvable)
//  .allowOverridesToApproverListPerMergeRequest(java.lang.Boolean)
//  .allowOverridesToApproverListPerMergeRequest(IResolvable)
//  .keepSettingsOnDestroy(java.lang.Boolean)
//  .keepSettingsOnDestroy(IResolvable)
//  .requireReauthenticationToApprove(java.lang.Boolean)
//  .requireReauthenticationToApprove(IResolvable)
//  .retainApprovalsOnPush(java.lang.Boolean)
//  .retainApprovalsOnPush(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.group">group</a></code> | <code>java.lang.String</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowAuthorApproval">allowAuthorApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow or prevent authors from self approving merge requests; `true` means authors can self approve. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowCommitterApproval">allowCommitterApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow or prevent committers from self approving merge requests. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowOverridesToApproverListPerMergeRequest">allowOverridesToApproverListPerMergeRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow or prevent overriding approvers per merge request. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.keepSettingsOnDestroy">keepSettingsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.requireReauthenticationToApprove">requireReauthenticationToApprove</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require approver to authenticate before adding the approval. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.retainApprovalsOnPush">retainApprovalsOnPush</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Retain approval count on a new push. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#group GroupLevelMrApprovals#group}

---

##### `allowAuthorApproval`<sup>Optional</sup> <a name="allowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowAuthorApproval"></a>

```java
public java.lang.Object getAllowAuthorApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow or prevent authors from self approving merge requests; `true` means authors can self approve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_author_approval GroupLevelMrApprovals#allow_author_approval}

---

##### `allowCommitterApproval`<sup>Optional</sup> <a name="allowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowCommitterApproval"></a>

```java
public java.lang.Object getAllowCommitterApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow or prevent committers from self approving merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_committer_approval GroupLevelMrApprovals#allow_committer_approval}

---

##### `allowOverridesToApproverListPerMergeRequest`<sup>Optional</sup> <a name="allowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowOverridesToApproverListPerMergeRequest"></a>

```java
public java.lang.Object getAllowOverridesToApproverListPerMergeRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow or prevent overriding approvers per merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_overrides_to_approver_list_per_merge_request GroupLevelMrApprovals#allow_overrides_to_approver_list_per_merge_request}

---

##### `keepSettingsOnDestroy`<sup>Optional</sup> <a name="keepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.keepSettingsOnDestroy"></a>

```java
public java.lang.Object getKeepSettingsOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy.

You will need to apply the resource with the new setting before destroying the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#keep_settings_on_destroy GroupLevelMrApprovals#keep_settings_on_destroy}

---

##### `requireReauthenticationToApprove`<sup>Optional</sup> <a name="requireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.requireReauthenticationToApprove"></a>

```java
public java.lang.Object getRequireReauthenticationToApprove();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require approver to authenticate before adding the approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#require_reauthentication_to_approve GroupLevelMrApprovals#require_reauthentication_to_approve}

---

##### `retainApprovalsOnPush`<sup>Optional</sup> <a name="retainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.retainApprovalsOnPush"></a>

```java
public java.lang.Object getRetainApprovalsOnPush();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Retain approval count on a new push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#retain_approvals_on_push GroupLevelMrApprovals#retain_approvals_on_push}

---



