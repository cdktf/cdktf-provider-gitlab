# `projectSecurityPolicyAttachment` Submodule <a name="`projectSecurityPolicyAttachment` Submodule" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectSecurityPolicyAttachment <a name="ProjectSecurityPolicyAttachment" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_security_policy_attachment gitlab_project_security_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.Initializer"></a>

```typescript
import { projectSecurityPolicyAttachment } from '@cdktf/provider-gitlab'

new projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment(scope: Construct, id: string, config: ProjectSecurityPolicyAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig">ProjectSecurityPolicyAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig">ProjectSecurityPolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectSecurityPolicyAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isConstruct"></a>

```typescript
import { projectSecurityPolicyAttachment } from '@cdktf/provider-gitlab'

projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isTerraformElement"></a>

```typescript
import { projectSecurityPolicyAttachment } from '@cdktf/provider-gitlab'

projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isTerraformResource"></a>

```typescript
import { projectSecurityPolicyAttachment } from '@cdktf/provider-gitlab'

projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.generateConfigForImport"></a>

```typescript
import { projectSecurityPolicyAttachment } from '@cdktf/provider-gitlab'

projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectSecurityPolicyAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectSecurityPolicyAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectSecurityPolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_security_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectSecurityPolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.policyProjectGraphqlId">policyProjectGraphqlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.projectGraphqlId">projectGraphqlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.policyProjectInput">policyProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.policyProject">policyProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyProjectGraphqlId`<sup>Required</sup> <a name="policyProjectGraphqlId" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.policyProjectGraphqlId"></a>

```typescript
public readonly policyProjectGraphqlId: string;
```

- *Type:* string

---

##### `projectGraphqlId`<sup>Required</sup> <a name="projectGraphqlId" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.projectGraphqlId"></a>

```typescript
public readonly projectGraphqlId: string;
```

- *Type:* string

---

##### `policyProjectInput`<sup>Optional</sup> <a name="policyProjectInput" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.policyProjectInput"></a>

```typescript
public readonly policyProjectInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `policyProject`<sup>Required</sup> <a name="policyProject" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.policyProject"></a>

```typescript
public readonly policyProject: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectSecurityPolicyAttachmentConfig <a name="ProjectSecurityPolicyAttachmentConfig" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.Initializer"></a>

```typescript
import { projectSecurityPolicyAttachment } from '@cdktf/provider-gitlab'

const projectSecurityPolicyAttachmentConfig: projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.policyProject">policyProject</a></code> | <code>string</code> | The ID or Full Path of the security policy project. |
| <code><a href="#@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.project">project</a></code> | <code>string</code> | The ID or Full Path of the project which will have the security policy project assigned to it. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyProject`<sup>Required</sup> <a name="policyProject" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.policyProject"></a>

```typescript
public readonly policyProject: string;
```

- *Type:* string

The ID or Full Path of the security policy project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_security_policy_attachment#policy_project ProjectSecurityPolicyAttachment#policy_project}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectSecurityPolicyAttachment.ProjectSecurityPolicyAttachmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or Full Path of the project which will have the security policy project assigned to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_security_policy_attachment#project ProjectSecurityPolicyAttachment#project}

---



