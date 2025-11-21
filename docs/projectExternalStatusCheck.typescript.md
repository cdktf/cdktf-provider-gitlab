# `projectExternalStatusCheck` Submodule <a name="`projectExternalStatusCheck` Submodule" id="@cdktf/provider-gitlab.projectExternalStatusCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectExternalStatusCheck <a name="ProjectExternalStatusCheck" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_external_status_check gitlab_project_external_status_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer"></a>

```typescript
import { projectExternalStatusCheck } from '@cdktf/provider-gitlab'

new projectExternalStatusCheck.ProjectExternalStatusCheck(scope: Construct, id: string, config: ProjectExternalStatusCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig">ProjectExternalStatusCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig">ProjectExternalStatusCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetProtectedBranchIds">resetProtectedBranchIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetSharedSecret">resetSharedSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetProtectedBranchIds` <a name="resetProtectedBranchIds" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetProtectedBranchIds"></a>

```typescript
public resetProtectedBranchIds(): void
```

##### `resetSharedSecret` <a name="resetSharedSecret" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetSharedSecret"></a>

```typescript
public resetSharedSecret(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectExternalStatusCheck resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isConstruct"></a>

```typescript
import { projectExternalStatusCheck } from '@cdktf/provider-gitlab'

projectExternalStatusCheck.ProjectExternalStatusCheck.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformElement"></a>

```typescript
import { projectExternalStatusCheck } from '@cdktf/provider-gitlab'

projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformResource"></a>

```typescript
import { projectExternalStatusCheck } from '@cdktf/provider-gitlab'

projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport"></a>

```typescript
import { projectExternalStatusCheck } from '@cdktf/provider-gitlab'

projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectExternalStatusCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectExternalStatusCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectExternalStatusCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_external_status_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectExternalStatusCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.hmac">hmac</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrlInput">externalUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectIdInput">projectIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIdsInput">protectedBranchIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecretInput">sharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrl">externalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectId">projectId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIds">protectedBranchIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hmac`<sup>Required</sup> <a name="hmac" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.hmac"></a>

```typescript
public readonly hmac: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `externalUrlInput`<sup>Optional</sup> <a name="externalUrlInput" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrlInput"></a>

```typescript
public readonly externalUrlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: number;
```

- *Type:* number

---

##### `protectedBranchIdsInput`<sup>Optional</sup> <a name="protectedBranchIdsInput" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIdsInput"></a>

```typescript
public readonly protectedBranchIdsInput: number[];
```

- *Type:* number[]

---

##### `sharedSecretInput`<sup>Optional</sup> <a name="sharedSecretInput" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecretInput"></a>

```typescript
public readonly sharedSecretInput: string;
```

- *Type:* string

---

##### `externalUrl`<sup>Required</sup> <a name="externalUrl" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrl"></a>

```typescript
public readonly externalUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectId"></a>

```typescript
public readonly projectId: number;
```

- *Type:* number

---

##### `protectedBranchIds`<sup>Required</sup> <a name="protectedBranchIds" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIds"></a>

```typescript
public readonly protectedBranchIds: number[];
```

- *Type:* number[]

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectExternalStatusCheckConfig <a name="ProjectExternalStatusCheckConfig" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.Initializer"></a>

```typescript
import { projectExternalStatusCheck } from '@cdktf/provider-gitlab'

const projectExternalStatusCheckConfig: projectExternalStatusCheck.ProjectExternalStatusCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.externalUrl">externalUrl</a></code> | <code>string</code> | The URL of the external status check service. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.name">name</a></code> | <code>string</code> | The display name of the external status check service. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.projectId">projectId</a></code> | <code>number</code> | The ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.protectedBranchIds">protectedBranchIds</a></code> | <code>number[]</code> | The list of IDs of protected branches to scope the rule by. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | The HMAC secret for the external status check. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalUrl`<sup>Required</sup> <a name="externalUrl" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.externalUrl"></a>

```typescript
public readonly externalUrl: string;
```

- *Type:* string

The URL of the external status check service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_external_status_check#external_url ProjectExternalStatusCheck#external_url}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The display name of the external status check service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_external_status_check#name ProjectExternalStatusCheck#name}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.projectId"></a>

```typescript
public readonly projectId: number;
```

- *Type:* number

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_external_status_check#project_id ProjectExternalStatusCheck#project_id}

---

##### `protectedBranchIds`<sup>Optional</sup> <a name="protectedBranchIds" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.protectedBranchIds"></a>

```typescript
public readonly protectedBranchIds: number[];
```

- *Type:* number[]

The list of IDs of protected branches to scope the rule by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_external_status_check#protected_branch_ids ProjectExternalStatusCheck#protected_branch_ids}

---

##### `sharedSecret`<sup>Optional</sup> <a name="sharedSecret" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

The HMAC secret for the external status check.

If this is set, then removed from the config, the value will get set to empty in the state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_external_status_check#shared_secret ProjectExternalStatusCheck#shared_secret}

---



