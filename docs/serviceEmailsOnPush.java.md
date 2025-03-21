# `serviceEmailsOnPush` Submodule <a name="`serviceEmailsOnPush` Submodule" id="@cdktf/provider-gitlab.serviceEmailsOnPush"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceEmailsOnPush <a name="ServiceEmailsOnPush" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push gitlab_service_emails_on_push}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_emails_on_push.ServiceEmailsOnPush;

ServiceEmailsOnPush.Builder.create(Construct scope, java.lang.String id)
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
    .recipients(java.lang.String)
//  .branchesToBeNotified(java.lang.String)
//  .disableDiffs(java.lang.Boolean)
//  .disableDiffs(IResolvable)
//  .id(java.lang.String)
//  .pushEvents(java.lang.Boolean)
//  .pushEvents(IResolvable)
//  .sendFromCommitterEmail(java.lang.Boolean)
//  .sendFromCommitterEmail(IResolvable)
//  .tagPushEvents(java.lang.Boolean)
//  .tagPushEvents(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.recipients">recipients</a></code> | <code>java.lang.String</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.disableDiffs">disableDiffs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#id ServiceEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.sendFromCommitterEmail">sendFromCommitterEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for tag push events. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.project"></a>

- *Type:* java.lang.String

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#project ServiceEmailsOnPush#project}

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.recipients"></a>

- *Type:* java.lang.String

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#recipients ServiceEmailsOnPush#recipients}

---

##### `branchesToBeNotified`<sup>Optional</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.branchesToBeNotified"></a>

- *Type:* java.lang.String

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#branches_to_be_notified ServiceEmailsOnPush#branches_to_be_notified}

---

##### `disableDiffs`<sup>Optional</sup> <a name="disableDiffs" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.disableDiffs"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#disable_diffs ServiceEmailsOnPush#disable_diffs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#id ServiceEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.pushEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#push_events ServiceEmailsOnPush#push_events}

---

##### `sendFromCommitterEmail`<sup>Optional</sup> <a name="sendFromCommitterEmail" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.sendFromCommitterEmail"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#send_from_committer_email ServiceEmailsOnPush#send_from_committer_email}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.tagPushEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#tag_push_events ServiceEmailsOnPush#tag_push_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetBranchesToBeNotified">resetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetDisableDiffs">resetDisableDiffs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetPushEvents">resetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetSendFromCommitterEmail">resetSendFromCommitterEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetTagPushEvents">resetTagPushEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBranchesToBeNotified` <a name="resetBranchesToBeNotified" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetBranchesToBeNotified"></a>

```java
public void resetBranchesToBeNotified()
```

##### `resetDisableDiffs` <a name="resetDisableDiffs" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetDisableDiffs"></a>

```java
public void resetDisableDiffs()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetId"></a>

```java
public void resetId()
```

##### `resetPushEvents` <a name="resetPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetPushEvents"></a>

```java
public void resetPushEvents()
```

##### `resetSendFromCommitterEmail` <a name="resetSendFromCommitterEmail" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetSendFromCommitterEmail"></a>

```java
public void resetSendFromCommitterEmail()
```

##### `resetTagPushEvents` <a name="resetTagPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetTagPushEvents"></a>

```java
public void resetTagPushEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceEmailsOnPush resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_emails_on_push.ServiceEmailsOnPush;

ServiceEmailsOnPush.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_emails_on_push.ServiceEmailsOnPush;

ServiceEmailsOnPush.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_emails_on_push.ServiceEmailsOnPush;

ServiceEmailsOnPush.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_emails_on_push.ServiceEmailsOnPush;

ServiceEmailsOnPush.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceEmailsOnPush.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceEmailsOnPush resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceEmailsOnPush to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceEmailsOnPush that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceEmailsOnPush to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.slug">slug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotifiedInput">branchesToBeNotifiedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffsInput">disableDiffsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEventsInput">pushEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipientsInput">recipientsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmailInput">sendFromCommitterEmailInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEventsInput">tagPushEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffs">disableDiffs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipients">recipients</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmail">sendFromCommitterEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.slug"></a>

```java
public java.lang.String getSlug();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `branchesToBeNotifiedInput`<sup>Optional</sup> <a name="branchesToBeNotifiedInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotifiedInput"></a>

```java
public java.lang.String getBranchesToBeNotifiedInput();
```

- *Type:* java.lang.String

---

##### `disableDiffsInput`<sup>Optional</sup> <a name="disableDiffsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffsInput"></a>

```java
public java.lang.Object getDisableDiffsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pushEventsInput`<sup>Optional</sup> <a name="pushEventsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEventsInput"></a>

```java
public java.lang.Object getPushEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipientsInput"></a>

```java
public java.lang.String getRecipientsInput();
```

- *Type:* java.lang.String

---

##### `sendFromCommitterEmailInput`<sup>Optional</sup> <a name="sendFromCommitterEmailInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmailInput"></a>

```java
public java.lang.Object getSendFromCommitterEmailInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagPushEventsInput`<sup>Optional</sup> <a name="tagPushEventsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEventsInput"></a>

```java
public java.lang.Object getTagPushEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `branchesToBeNotified`<sup>Required</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotified"></a>

```java
public java.lang.String getBranchesToBeNotified();
```

- *Type:* java.lang.String

---

##### `disableDiffs`<sup>Required</sup> <a name="disableDiffs" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffs"></a>

```java
public java.lang.Object getDisableDiffs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pushEvents`<sup>Required</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEvents"></a>

```java
public java.lang.Object getPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipients"></a>

```java
public java.lang.String getRecipients();
```

- *Type:* java.lang.String

---

##### `sendFromCommitterEmail`<sup>Required</sup> <a name="sendFromCommitterEmail" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmail"></a>

```java
public java.lang.Object getSendFromCommitterEmail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagPushEvents`<sup>Required</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEvents"></a>

```java
public java.lang.Object getTagPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceEmailsOnPushConfig <a name="ServiceEmailsOnPushConfig" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.service_emails_on_push.ServiceEmailsOnPushConfig;

ServiceEmailsOnPushConfig.builder()
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
    .recipients(java.lang.String)
//  .branchesToBeNotified(java.lang.String)
//  .disableDiffs(java.lang.Boolean)
//  .disableDiffs(IResolvable)
//  .id(java.lang.String)
//  .pushEvents(java.lang.Boolean)
//  .pushEvents(IResolvable)
//  .sendFromCommitterEmail(java.lang.Boolean)
//  .sendFromCommitterEmail(IResolvable)
//  .tagPushEvents(java.lang.Boolean)
//  .tagPushEvents(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.project">project</a></code> | <code>java.lang.String</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.recipients">recipients</a></code> | <code>java.lang.String</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.branchesToBeNotified">branchesToBeNotified</a></code> | <code>java.lang.String</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.disableDiffs">disableDiffs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#id ServiceEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.sendFromCommitterEmail">sendFromCommitterEmail</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable notifications for tag push events. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#project ServiceEmailsOnPush#project}

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.recipients"></a>

```java
public java.lang.String getRecipients();
```

- *Type:* java.lang.String

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#recipients ServiceEmailsOnPush#recipients}

---

##### `branchesToBeNotified`<sup>Optional</sup> <a name="branchesToBeNotified" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.branchesToBeNotified"></a>

```java
public java.lang.String getBranchesToBeNotified();
```

- *Type:* java.lang.String

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#branches_to_be_notified ServiceEmailsOnPush#branches_to_be_notified}

---

##### `disableDiffs`<sup>Optional</sup> <a name="disableDiffs" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.disableDiffs"></a>

```java
public java.lang.Object getDisableDiffs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#disable_diffs ServiceEmailsOnPush#disable_diffs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#id ServiceEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.pushEvents"></a>

```java
public java.lang.Object getPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#push_events ServiceEmailsOnPush#push_events}

---

##### `sendFromCommitterEmail`<sup>Optional</sup> <a name="sendFromCommitterEmail" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.sendFromCommitterEmail"></a>

```java
public java.lang.Object getSendFromCommitterEmail();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#send_from_committer_email ServiceEmailsOnPush#send_from_committer_email}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.tagPushEvents"></a>

```java
public java.lang.Object getTagPushEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/service_emails_on_push#tag_push_events ServiceEmailsOnPush#tag_push_events}

---



